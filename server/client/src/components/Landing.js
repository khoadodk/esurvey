import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ paddingBottom: 20 }}>
          <h1 class="teal-text darken-3">eSurvey</h1>
          <h5>
            <strong>Question?</strong> Send it and collect your user's feedback
          </h5>
        </div>

        <div class="row">
          <div class="col s4">
            <i class="large material-icons blue-text darken-2">flash_on</i>
            <h5>Fast Response</h5>
          </div>
          <div class="col s4">
            <i class="large material-icons blue-text darken-2">
              monetization_on
            </i>
            <h5>Cheap and Affordable</h5>
          </div>
          <div class="col s4">
            <i class="large material-icons blue-text darken-2">build</i>
            <h5>Easy to Use</h5>
          </div>
        </div>

        <div>
          <h5>Testimonials</h5>
        </div>

        <div class="row">
          <div class="col s4">
            <div class="card horizontal">
              <div class="card-image">
                <img src="/images/leo.jpg" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card horizontal">
              <div class="card-image">
                <img src="/images/aarav.jpg" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card horizontal">
              <div class="card-image">
                <img src="/images/monica.jpg" />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
