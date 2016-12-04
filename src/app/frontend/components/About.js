import React, { Component } from 'react';

export default class Article extends Component {
  render(){
    return(
      <div class="about">
        <div class="about-image">
          <img src="https://c1.staticflickr.com/1/42/77272776_28e94a47f0.jpg"/>
        </div>
        <div class="about-head">Hello... it's me</div>
        <div class="about-description">
         I've been wondering if after all these years you'd like to meet
          to go over Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    )
  }
}
