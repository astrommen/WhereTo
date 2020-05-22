import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Wrapper from "./components/Wrapper"

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login"
import FormVacation from "./components/FormVacation"
import NoMatch from "./pages/NoMatch"
import Testing from "./pages/Testing"
import Profile from "./pages/Profile"
import Daytrip from "./pages/Daytrip";

import PrivateRoute from "./components/private-route/PrivateRoute";
import FormLocal from "./components/FormLocal/FormLocal"
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

  this.state= {
    redirect: false,
    whichPage: "",    
    tripName: "",
    dateStart: "",
    // location: {
      city: "",
      state: "",
    // },
    // outdoors: {
      boating: "",
      fishing: "",
      hiking: "",
      beach: "",
    // },
    // events: {
      concert: "",
      sports: "",
      theatre: "",
    // },
    sightseeing: "",
    // foods: {
      breakfast: "",
      dinner: "",
      dessert: "",
      drinks: "",
      foodType: ""
    // } 
  };
    this.updateAppState=this.updateAppState.bind(this)
  }

  updateAppState (state) {
    console.log("from the APP " , state)

    this.setState(state)

    // this.setState(state, () => {
    //   this.props.history.push({pathname: "/testing"})
    // }) 
  }
  
  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Wrapper>
              <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/daytrip" component={Daytrip} />
              <Route exact path="/local" component={FormLocal} />
              <Route exact path="/vacation" component={() => 
              <FormVacation 
              updateAppState={this.updateAppState} />} />
              <Route exact path="/register" component={Register} />
              <Route path="/testing" component={Testing} />
              <Route path="/outdoors" component={() =>
                <Outdoors state={this.state} /> }/>
              <Route path="/events" component={() =>
                <Ticketmaster state={this.state} />} />
              <Route path="/trip" component={() => 
                <TripAdvisor state={this.state}/>} />
              <Route path="/food" component={ () => 
                <Yelp state={this.state}/>} />
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

//use a state to control the profile:id