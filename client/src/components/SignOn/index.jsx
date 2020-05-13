import React, { Component } from "react";

const GOOGLE_BUTTON_ID = "google-sign-in-button";

class SignOn extends Component {

  // loadClientWhenGapiReady = (script) => {
  //   console.log('Trying To Load Client!');
  //   console.log(script)
  //   if(script.getAttribute('gapi_processed')){
  //     console.log('Client is ready! Now you can access gapi. :)');
  //     if(window.location.hostname==='localhost'){
  //       window.gapi.client.load("http://localhost:3000/_ah/api/discovery/v1/apis/metafields/v1/rest")
  //       .then((response) => {
  //         console.log("Connected to metafields API locally.");
  //         },
  //         function (err) {
  //           console.log("Error connecting to metafields API locally.");
  //         }
  //       );
  //     }
  //   }
  //   else{
  //     console.log('Client wasn\'t ready, trying again in 100ms');
  //     setTimeout(() => {this.loadClientWhenGapiReady(script)}, 100);
  //   }
  // }

  // initGapi = () => {
  //   console.log('Initializing GAPI...');
  //   console.log('Creating the google script tag...');

  //   const script = document.createElement("script");
  //   script.onload = () => {
  //     console.log('Loaded script, now loading our api...')
  //     // Gapi isn't available immediately so we have to wait until it is to use gapi.
  //     this.loadClientWhenGapiReady(script);
  //   };
  //   script.src = "https://apis.google.com/js/client.js";
    
  //   document.body.appendChild(script);
  // }
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
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());
  }

  

  // onSignIn = (googleUser) => {
  //   console.log("user signed in");
  //   // Useful data for your client-side scripts:
  //   var profile = googleUser.getBasicProfile();

  //   console.log(profile);
  //   // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  //   console.log('Full Name: ' + profile.getName());
  //   console.log('Given Name: ' + profile.getGivenName());
  //   console.log('Family Name: ' + profile.getFamilyName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail());
  // }

  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  render() {
    return (
      <div >

        <div id={GOOGLE_BUTTON_ID} />

        <button onClick={() => this.signOut()}>Sign out</button>
      </div>
    );
  }
}

export default SignOn;