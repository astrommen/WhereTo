import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Wrapper from "./components/Wrapper"
import TripMap from "./components/TripMap";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login"
import FormVacation from "./pages/FormVacation"
import NoMatch from "./pages/NoMatch"
import Testing from "./pages/Testing"
import Profile from "./pages/Profile"

// import PrivateRoute from "./components/private-route/PrivateRoute";
import FormLocal from "./components/FormLocal/FormLocal"
import Register from "./components/auth/Register"
import LogIn from "./components/auth/LogIn";
import CountryInfo from "./components/CountryInfo";
import DayPlanner from "./components/DayPlanner";
import Outdoors from "./components/Outdoors";
import Ticketmaster from "./components/Ticketmaster";
import Walk from "./components/Walk";
import Yelp from "./components/Yelp";
import TripAdvisor from "./components/TripAdvisor";
import './App.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Wrapper>
              <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/local" component={FormLocal} />
              <Route exact path="/vacation" component={FormVacation} />
              <Route exact path="/register" component={Register} />
              <Route path="/testing" component={Testing} />
              <Route path="/dayplanner" component={DayPlanner} />
              <Route path="/map" component={TripMap} />
              <Route path="/outdoors" component={Outdoors} />
              <Route path="/events" component={Ticketmaster} />
              <Route path="/trip" component={TripAdvisor} />
              <Route path="/walk" component={Walk} />
              <Route path="/food" component={Yelp} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={LogIn} />
                {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
              <Route component={NoMatch} path="*" />
              </Switch>
            </Wrapper>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;

//use a state to control the profile:id