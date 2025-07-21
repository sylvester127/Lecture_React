import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/day3/router_lecture/Home';
import Page1 from './component/day3/router_lecture/Page1';
import Menu from './component/day3/router_lecture/Menu';
import Posts from './lessons/day3/router/router_lecture/Posts';

export default class RoutingExample extends Component {
  render() {
    return (
      <Router>
        <Menu/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/page1/:name' component={Page1}/>
          <Route exact path='/page1?' component={Page1}/>
          <Route exact path='/page1' component={Page1}/>
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    );
  }
}