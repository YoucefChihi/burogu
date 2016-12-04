import React, { Component } from 'react';
import Tag from './Tag'

export default class Tags extends Component {

  render() {
    let tags = this.props.data;
    return(
      <div class="tags">
        <div class="tags-head">Tags</div>
        <div class="tags-content">
          {tags.map((item, index) => (
            <Tag data={item} key={'tag'+index} />
          ))}
        </div>
      </div>
    )
  }

}
