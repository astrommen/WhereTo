import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Wrapper from "./components/Wrapper"

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import FormVacation from "./components/FormVacation"
import Vacation from "./pages/Vacation"
import Profile from "./pages/Profile"
import FormDay from "./components/FormDay"
import Daytrip from "./pages/Daytrip";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register"
import LogIn from "./components/auth/LogIn";
import Outdoors from "./components/Outdoors";
import Ticketmaster from "./components/Ticketmaster";
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

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      redirect: false,
      whichPage: "",
      tripName: "",
      dateStart: "",
      city: "",
      state: "",
      boating: "",
      fishing: "",
      hiking: "",
      beach: "",
      concert: "",
      sports: "",
      theatre: "",
      sightseeing: "",
      breakfast: "",
      dinner: "",
      dessert: "",
      drinks: "",
      foodType: ""
    };
    this.updateAppState = this.updateAppState.bind(this)
  }

  updateAppState(state) {
    console.log("from the APP ", state)
    this.setState(state)
  }

  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Wrapper>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/daytrip" component={() =>
                  <Daytrip state={this.state} />} />
                <Route exact path="/dayform" component={() =>
                  <FormDay updateAppState={this.updateAppState} />} />
                <Route exact path="/vacationform" component={() =>
                  <FormVacation updateAppState={this.updateAppState} />} />
                <Route path="/vacation" component={Vacation} />
                <Route exact path="/register" component={Register} />
                <Route path="/outdoors" component={() =>
                  <Outdoors state={this.state} />} />
                <Route path="/events" component={() =>
                  <Ticketmaster state={this.state} />} />
                <Route path="/trip" component={() =>
                  <TripAdvisor state={this.state} />} />
                <Route path="/food" component={() =>
                  <Yelp state={this.state} />} />
                <Route exact path="/login" component={LogIn} />
                <PrivateRoute exact path="/profile" component={Profile} />
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

