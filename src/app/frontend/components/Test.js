import React, { Component } from 'react';
import history from '../core/history';
import classnames from 'classnames';

import Navigation from './Navigation'

export default class Test extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  textChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render(){
    let c = classnames({
      'root-test': true,
      leave: this.state.leave
    })
    return(
      <div class="root-test">
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
