import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import history from '../core/history';
import '../styles/main.sass';

import Home from '../routes/Home';
import About from '../routes/About';
import Portfolio from '../routes/Portfolio';
import Archive from '../routes/Archive';
import Signin from '../routes/Signin';
import NotFound from '../routes/NotFound';
import Test from './Test';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Router history={history}>
        <Route path="/" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="archive" component={Archive}/>
        <Route path="signin" component={Signin}/>
        <Route path="test" component={Test}/>
        <Route path="*" component={NotFound}/>
      </Router>
    )
  }
}

render(<App/>, document.getElementById('app'));
