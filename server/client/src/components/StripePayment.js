import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const StripePayment = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="eSurvey"
      description="$1 for 1 survey credit"
      amount={100}
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
