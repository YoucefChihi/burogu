import React, { Component } from 'react';
import history from '../core/history';
import classnames from 'classnames';

import Navigation from '../components/Navigation'

export default class About extends Component {

  render(){
    return(
      <div class="root-test"
        style={{
          background: "lightgreen",
        }}>
        <Navigation />
        <div class="main">
          <div class="holdup">
            {history.currentLocation()}
          </div>
        </div>
      </div>
    )
  }
}
