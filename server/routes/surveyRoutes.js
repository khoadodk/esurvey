const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for your input');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //wait for email to be sent from the SendGrid API, then save the mailer, then reduce the credit by 1
    try {
      const mailer = new Mailer(survey, surveyTemplate(survey));
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      //send back the updated new User model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
