const key = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(key);
const requireLogin = require('../middlewares/requireLogin');
require('dotenv').config();

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    //user not logged in

    const charge = await stripe.charges.create({
      amount: 100,
      currency: 'usd',
      description: '$1 for 1 survey credit',
      source: req.body.id
    });
    //receive the payment and send credit to user
    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });
};
