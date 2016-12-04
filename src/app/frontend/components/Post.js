import React, { Component } from 'react';

export default class Article extends Component {
  render(){
    return(
      <div>
      <div class="post">
        <div class="post-image"></div>
        <div class="post-content">
          <div class="post-title">{this.props.data.title}</div>
          <div class="post-subtitle">{this.props.data.subtitle}</div>
        </div>
      </div>
      {this.props.hr ? <div class="hr"></div> : null}
      </div>
    )
  }
}
