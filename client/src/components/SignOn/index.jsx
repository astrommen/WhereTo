import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from "../Grid";
import Register from "../register";
import Profile from "../../pages/Profile";
import "./style.css";

const GOOGLE_BUTTON_ID = "google-sign-in-button";

class SignOn extends Component {
  state = {
    redirect: false,
    whichPage: ""
  }
  
  setRedirect = () => {
    return(this.setState({
      redirect: true
    }));
  }

  setWhichPage = () => {
    this.setState({whichPage: "profile"})
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      console.log(this.state.whichPage);
      if(this.state.whichPage==="register"){
        return <Redirect to="/register" component={Register}/>
      } else {
        return <Redirect to="/profile" component={Profile}/>
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
      <div className="btnContainer">
        {this.renderRedirect()}

        <Row>
            <div id={GOOGLE_BUTTON_ID}/>

          <button onClick={() => this.signOut()}>Sign out</button>
        </Row>

        <Row>
          <button className="Profile" onClick={()=>{
              this.setRedirect(); 
              this.setState({whichPage: "profile"});
            }}> 
              Login 
            </button>
        </Row>

        <Row>
          <button className="Register" onClick={()=>{
            this.setRedirect(); 
            this.setState({whichPage: "register"});
          }}> 
            Sign Up 
          </button>
        </Row>

      </div>
    );
  }
}

export default SignOn;