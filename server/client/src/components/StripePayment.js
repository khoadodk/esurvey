import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const StripePayment = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="eSurvey"
      description="$10 for 10 survey credits"
      amount={1000}
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">add credits</button>
    </StripeCheckout>
  );
};

export default connect(
  null,
  actions
)(StripePayment);
