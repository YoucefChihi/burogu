import React, { Component } from 'react';

export default class Article extends Component {
  render(){
    return(
      <div class="article">
        <div class="article-image">
          <img src={this.props.data.image} />
        </div>
        <div class="article-head">
          <div class="article-title"><h3>{this.props.data.title}</h3></div>
          <div class="article-subtitle">
            <h5>{this.props.data.subtitle}
            <span class="article-date"> ,{this.props.data.date}</span>
            </h5>
          </div>
        </div>
        <div class="article-snippet">
          {this.props.data.snippet}
        </div>
        <div class="article-footer">
          <div class="article-more">Read more</div>
          <div class="article-comments">Comments 0</div>
        </div>
      </div>
    )
  }
}
