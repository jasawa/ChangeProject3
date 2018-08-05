import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Blogs from "./blogPages/Blogs";
import Detail from "./blogPages/Detail";
import NoMatch from "./blogPages/NoMatch";
import Blogs from "./newsletter/Newsletter";
import axios from 'axios';
import Crime from "./Crime";


export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  logout() {
    axios.get('/apis/users/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <Signup
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:id" component={Detail} />
        <Route component={NoMatch} />
        <Route exact path="/crime" component={Crime} />
        <Route exact path="/newsletter" component={Newsletter} />      
      	</Switch>
      </Router>
    );
  }
}
//export default MainRouter;