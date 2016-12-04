import React, { Component } from 'react';
import history from '../core/history';
import classnames from 'classnames';

import Articles from '../components/Articles'
import About from '../components/About'
import Posts from '../components/Posts'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Tags from '../components/Tags'

let posts = [
  {
    title: 'One Dance',
    subtitle: 'Hennesy in his hand tho ?'
  },
  {
    title: '7 years',
    subtitle: 'This boy does listen to his mamma'
  },
  {
    title: 'Rather be',
    subtitle: "She obviously doesn't care about it"
  },
]

let articles = [
  {
    title: 'Have you heard about it ?',
    subtitle: "It's nothing really",
    date: 'September 06, 2016',
    image: 'https://c2.staticflickr.com/4/3171/3027230634_1e96837ef4_z.jpg?zz=1',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'What was he playing ?',
    subtitle: "Probably tetris",
    date: 'September 06, 2016',
    image: 'https://c2.staticflickr.com/4/3269/2926672718_001a2fed19_z.jpg?zz=1',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: "It's raining men !",
    subtitle: "Hallelujah",
    date: 'September 06, 2016',
    image: 'https://c7.staticflickr.com/8/7344/11440641494_1036d285c5_k.jpg',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
]

let tags = [
  {
    tag: 'Beach'
  },
  {
    tag: 'Web Dev'
  },
  {
    tag: 'Php'
  },
  {
    tag: 'React'
  },
  {
    tag: 'Drake'
  },
  {
    tag: 'Rihanna'
  },
  {
    tag: 'Will Smith'
  },
  {
    tag: 'Degla'
  },
]

export default class Home extends Component {

  constructor(){
    super()
    this.state = {
      leave: false
    }
  }

  render(){
    return(
      <div class="root" onScroll={this.scroll}>
        <Navigation />
        <Hero />
        <div class="main">
          <Articles data={articles} />

          <div class="info">
            <About />
            <Posts data={posts} />
            <Tags data={tags} />
          </div>
        </div>
        <div class="footer">does what every footer do</div>
      </div>
    )
  }
}
