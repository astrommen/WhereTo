import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import Register from "./components/register"
import Wrapper from "./components/Wrapper"
import './App.css';
import Profile from "./pages/Profile"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;

//use a state to control the profile:id