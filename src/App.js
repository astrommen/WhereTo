import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
