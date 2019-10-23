import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../src/actions/actions';

import Landing from './components/Landing';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          {/* <Route exact path="/surveys/new" component={SurveyNew} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
