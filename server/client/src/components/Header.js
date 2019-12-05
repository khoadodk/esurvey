import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripePayment from './StripePayment';

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <div>
            <li>
              <StripePayment />
            </li>
            <li style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  };

  return (
    <nav>
      <div className="blue darken-3 nav-wrapper">
        <Link
          to={auth ? '/surveys' : '/'}
          className="brand-logo left hide-on-small-and-down"
        >
          eSurvey
        </Link>
        <ul id="nav-mobile" className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
