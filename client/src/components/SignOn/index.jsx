import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from "../Grid";
import { Link } from "react-router-dom";
import Register from "../auth/Register";
import LogIn from "../auth/LogIn";
import Profile from "../../pages/Profile";
import "./style.css";

const GOOGLE_BUTTON_ID = "google-sign-in-button";

class SignOn extends Component {
  state = {
    redirect: false,
    whichPage: ""
  }

  setRedirect = () => {
    return (this.setState({
      redirect: true
    }));
  }

  setWhichPage = () => {
    this.setState({ whichPage: "profile" })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      console.log(this.state.whichPage);
      if (this.state.whichPage === "register") {
        return <Redirect to="/register" component={Register} />
      } else {
        return <Redirect to="/profile" component={Profile} />
      }
    }
  }

  componentDidMount() {
    new Promise((resolve) => {
      const interval = setInterval(() => {
        if (window.gapi != null) {
          console.log(window.gapi);

          window.gapi.signin2.render(GOOGLE_BUTTON_ID, {

            width: 200,
            height: 50,
            onsuccess: this.onSuccess
          });

          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
    console.log(this.state.redirect);
    this.renderRedirect();
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    if (profile) {
      // console.log("somtehing");
      // this.setRedirect();
      // // renderRedirect();
      // // this.setState({
      // //   redirect: true
      // // })

    }
    console.log("Name: " + profile.getName());
  }

  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  render() {
    return (
      <Container className="btnContainer">
        {this.renderRedirect()}

        <Row>
          <a href="http://localhost:3001/auth/facebook">
          <button style={{
              width: "200px",
              height: "50px",
              margin: "2% 0 0 0",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              padding: "1%",
              background: "white",
              color: "black"
            }}>

          Log In with Facebook
          </button>
          </a>
        {/* <a href="http://localhost:3001/auth/auth/google">Log In with Google</a> */}
          {/* <div id={GOOGLE_BUTTON_ID} />
          <button onClick={() => this.signOut()}>Sign out</button> */}
        </Row>

        <Row>
          <Link
            to="/login"
            style={{
              width: "200px",
              height: "50px",
              margin: "2% 0 0 0",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              padding: "1%",
              background: "white",
              color: "black"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Login
            </Link>
          {/* <button className="Profile" onClick={()=>{
              this.setRedirect(); 
              this.setState({whichPage: "profile"});
            }}> 
              Login 
            </button> */}
        </Row>

        <Row>
          <Link
            to="/register"
            style={{
              width: "200px",
              height: "50px",
              margin: "2% 0 0 0",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              padding: "1%",
              background: "white",
              color: "black"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Register
            </Link>
          {/* <button className="Register" onClick={()=>{
            this.setRedirect(); 
            this.setState({whichPage: "register"});
          }}>  */}
          {/* Sign Up 
          </button> */}
        </Row>

      </Container>
    );
  }
}

export default SignOn;