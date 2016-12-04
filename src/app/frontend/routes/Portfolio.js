import React, { Component } from 'react';
import history from '../core/history';
import classnames from 'classnames';

import Navigation from '../components/Navigation'

export default class Portfolio extends Component {

  render(){
    return(
      <div class="root-test"
        style={{
          background: 'salmon',
          color: 'white'
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
