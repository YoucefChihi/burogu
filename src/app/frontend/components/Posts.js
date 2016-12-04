import React, { Component } from 'react';
import Post from './Post'

export default class Posts extends Component {

  render() {
    let posts = this.props.data;

    return(
      <div class="popular">
        <div class="popular-head">Popular posts</div>
        <div class="posts">
          {posts.map((item, index)=>{
            return <Post data={item} hr={index < posts.length - 1} key={'post'+index}/>
          })}
        </div>
      </div>
    )
  }

}
