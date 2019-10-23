require('dotenv').config();

const key = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(key);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    //user not logged in
    if (!req.user) return res.status(401).send({ error: 'You must log in!' });
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
