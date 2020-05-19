import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Testing from "./pages/Testing";
import CountryInfo from "./components/CountryInfo";
import DayPlanner from "./components/DayPlanner";
import Outdoors from "./components/Outdoors";
import Ticketmaster from "./components/Ticketmaster";
import Walk from "./components/Walk";
import Yelp from "./components/Yelp";
import TripAdvisor from "./components/TripAdvisor";
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/testing" component={Testing} />
              <Route path="/dayplanner" component={DayPlanner} />
              <Route path="/outdoors" component={Outdoors} />
              <Route path="/events" component={Ticketmaster} />
              <Route path="/trip" component={TripAdvisor} />
              <Route path="/food" component={Yelp} />
              <Route path="/walk" component={Walk} />
              <Route component={NoMatch} />
            </Switch>

        </div>
      </Router>
    );
  }
}


export default App;
