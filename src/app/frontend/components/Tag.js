import React, { Component } from 'react';

export default class Tag extends Component {
  render() {
    return(
      <div class="tag">{this.props.data.tag}</div>
    )
  }
}
