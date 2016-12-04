import React, { Component } from 'react';
import Article from './Article'

export default class Articles extends Component {

  render() {
    let articles = this.props.data;

    return(
      <div class="articles">
        <div class="recent">Recent posts</div>
        {articles.map((item, index)=>(
          <Article data={item} key={'article'+index}/>
        ))}
      </div>
    )
  }

}
