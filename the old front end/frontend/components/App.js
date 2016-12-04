import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import classnames from 'classnames';

import '../styles/main.sass';

let DURATION = 500;

let pages = [
  "page 1",
  "page 2",
  "<img src='https://thumbs.dreamstime.com/z/vector-city-summer-18636761.jpg'/>",
  "<img src='http://wallarthd.com/wp-content/uploads/2014/09/Fantasy-Blue-City-Wallpaper-Images-980.jpg'/>",
  "<img src='http://4vector.com/i/free-vector-modern-city_093317_bluecity.jpg'/>",
  "<div class='bb'>bb</div>",
  "<button class='button'>dsqd</button><a href='#'>noth</a>",
  "page 8",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
  "page 1",
  "page 2",
  "<img src='https://thumbs.dreamstime.com/z/vector-city-summer-18636761.jpg'/>",
  "<img src='http://wallarthd.com/wp-content/uploads/2014/09/Fantasy-Blue-City-Wallpaper-Images-980.jpg'/>",
  "<img src='http://4vector.com/i/free-vector-modern-city_093317_bluecity.jpg'/>",
  "<div class='bb'>bb</div>",
  "<button class='button'>dsqd</button><a href='#'>noth</a>",
  "page 8",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
  "page 9",
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      flippedCurr: false,
      flippedPrev: true,
      hiddenPrev: false,
      hiddenCurr: false,
      disableNext: false,
      disablePrev: false,
      disableBoth: false,
      riseCurr: true,
      degla: pages.map(()=>(false)),
      pageVisible: false
    }
  }

  next= ()=>{
    if(!this.isNextDisabled()){
      this.setState({
        flippedCurr: true,
        disableBoth: true
      }, ()=>{
        setTimeout(()=>{
          this.setState({
            hiddenCurr: true,
            flippedCurr: false
          }, ()=>{
            setTimeout(()=>{
              this.setState({
                hiddenCurr: false,
                disableBoth: false,
                disableNext: ( (this.state.index + 2) >= pages.length ),
                disablePrev: false,
                index: this.state.index < pages.length ? this.state.index + 1 : this.state.index
              })
            },DURATION - 200)
          })
        }, DURATION - 200)
      })
    }
  }

  previous= ()=>{
    if(!this.isPrevDisabled()){
      this.setState({
        flippedPrev: false,
        disableBoth: true,
        riseCurr: false,
      }, ()=>{
        setTimeout(()=>{
          this.setState({
            hiddenPrev: true,
            flippedPrev: true,
            index: this.state.index > 0 ? this.state.index - 1 : this.state.index
          }, ()=>{
            setTimeout(()=>{
              this.setState({
                hiddenPrev: false,
                disableBoth: false,
                disableNext: false,
                disablePrev: ( (this.state.index) <= 0 ),
                riseCurr: true
              })
            },DURATION * 3/5)
          })
        }, DURATION * 3/5)
      })
    }
  }

  nextu = (index) => {
    let newDegla = pages.map(()=>(false));
    newDegla[index] = true;
    this.setState({
      degla: newDegla,
      pageVisible: false,
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          pageVisible: true
        })
      },DURATION - 50)
    })
  }

  isPrevDisabled(){
    return this.state.disablePrev || this.state.disableBoth
  }

  isNextDisabled(){
    return this.state.disableNext || this.state.disableBoth
  }

  render(){

    let classes = {
      current: classnames({
        page: true,
        flip: this.state.flippedCurr,
        hidden: this.state.hiddenCurr
      }),
      previous: classnames({
        page: true,
        flip: this.state.flippedPrev,
        hidden: this.state.hiddenPrev
      }),
      container: classnames({
        container: true,
        rise: this.state.riseCurr
      }),
      left: classnames({
        arrow: true,
        left: true,
        close: this.isPrevDisabled()
      }),
      right: classnames({
        arrow: true,
        right: true,
        close: this.isNextDisabled()
      }),
      degla: this.state.degla.map((d)=>(
        classnames({
          degla: true,
          active: d
        })
      )),
      rs: classnames({
        'right-side': true,
        'visible': this.state.pageVisible
      })
    }


    return(
      <div class="app-root">
        <div class="left-side">
          <div class="item-wraper">
            {pages.map((it, i)=>{
              let plc = {
                position: 'absolute',
                top: `calc(110px * ${Math.floor(i/3)} + 50px)`,
                left: `calc(110px * ${i%3} + 50px)`,
                zIndex: -1
              };
              return <div class={classes.degla[i]}
                onClick={this.nextu.bind(this,i)}
                dangerouslySetInnerHTML={{__html:pages[this.state.index]}}></div>
            })}
          </div>
          <div class="buttonwrap">
            <button
              class="button salmon">previous</button>
            <button
              class="button gloss" >next</button>
          </div>
        </div>

        <div class={classes.rs}>
          <div class={classes.left} onClick={this.previous}><div class="prev"></div> </div>
          <div class={classes.right} onClick={this.next}><div class="next"></div> </div>
          <section class="container" id="next">
            <div class="page">
              <figure class="front">
                <div
                  class="content"
                  dangerouslySetInnerHTML={{__html:pages[this.state.index + 1]}}></div>
              </figure>
              <figure class="back"></figure>
            </div>
          </section>
          <section class={classes.container} id="current">
            <div class={classes.current}>
              <figure class="front">
                <div
                  class="content"
                  dangerouslySetInnerHTML={{__html:pages[this.state.index]}}></div>
              </figure>
              <figure class="back"></figure>
            </div>
          </section>
          <section class="container" id="previous">
            <div class={classes.previous}>
              <figure class="front" >
                <div
                  class="content"
                  dangerouslySetInnerHTML={{__html:pages[this.state.index - 1]}}></div>
              </figure>
              <figure class="back"></figure>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
