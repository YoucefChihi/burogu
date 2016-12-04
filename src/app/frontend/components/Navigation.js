import React, { Component } from 'react';
import classnames from 'classnames';
import history from '../core/history';

let navItems = [
  {
    name: 'Home',
    path: '',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Portfolio',
    path: 'portfolio',
  },
  {
    name: 'Archive',
    path: 'archive',
  },
  {
    name: 'Sign in',
    path: 'signin',
  },
]

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      in: false,
      out: false,
      curtainVisible: true,
      loading: false,
    }
  }

  componentDidMount() {
    let home = history.currentLocation() == '';
    let loadedBefore = sessionStorage.getItem('loaded') ? true : false;
    if( home && !loadedBefore ) {
      sessionStorage.setItem('loaded', true)
      this.setState({
        loading: true
      },()=>{
        setTimeout(() => {
          this.curtainIn()
          this.setState({
            loading: false
          })
        }, 5000)
      })
    } else {
      this.curtainIn()
    }
  }

  curtainIn() {
    this.setState({
      in: true,
    })
    setTimeout(() => {
      this.setState({
        curtainVisible: false
      })
    }, 1200)
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  goTo(path) {
    if(path != history.currentLocation()){
      this.setState({
        out: !this.state.out,
        curtainVisible: true,
      })
      setTimeout(() => {
        history.push(path);
      }, 1200)
    }
  }

  render() {
    let burger = classnames({
      hamburger: true,
      close: this.state.open
    })
    let nav = classnames({
      navigation: true,
      show: this.state.open
    })
    let curt = classnames({
      curtain: true,
      out: this.state.out,
      in: this.state.in,
      hidden: !this.state.curtainVisible
    })
    let loadn = classnames({
      loading: true,
      on: this.state.loading
    })

    return(
      <div>
        <div class={loadn}>
          <div class="logo"></div>
        </div>
        <div class={curt}>
          <div class="block-1"></div>
          <div class="block-2"></div>
          <div class="block-3"></div>
          <div class="block-4"></div>
          <div class="block-5"></div>
          <div class="block-6"></div>
        </div>
        <div class={burger} onClick={this.toggle}>
          <div class="bars"></div>
        </div>
        <nav class={nav}>
          <ul>
            {navItems.map((item, index) => {
              let c = classnames({
                active: item.path == history.currentLocation()
              })
              return <li onClick={this.goTo.bind(this, item.path)}
                key={'navitem'+index}
                class={c}>
                {item.name}
              </li>
            })}
          </ul>
        </nav>
      </div>
    )
  }
}
