import React, { Component } from "react";

class SignOn extends Component {

  loadClientWhenGapiReady = (script) => {
    console.log('Trying To Load Client!');
    console.log(script)
    if(script.getAttribute('gapi_processed')){
      console.log('Client is ready! Now you can access gapi. :)');
      if(window.location.hostname==='localhost'){
        window.gapi.client.load("http://localhost:3000/_ah/api/discovery/v1/apis/metafields/v1/rest")
        .then((response) => {
          console.log("Connected to metafields API locally.");
          },
          function (err) {
            console.log("Error connecting to metafields API locally.");
          }
        );
      }
    }
    else{
      console.log('Client wasn\'t ready, trying again in 100ms');
      setTimeout(() => {this.loadClientWhenGapiReady(script)}, 100);
    }
  }

  initGapi = () => {
    console.log('Initializing GAPI...');
    console.log('Creating the google script tag...');

    const script = document.createElement("script");
    script.onload = () => {
      console.log('Loaded script, now loading our api...')
      // Gapi isn't available immediately so we have to wait until it is to use gapi.
      this.loadClientWhenGapiReady(script);
    };
    script.src = "https://apis.google.com/js/client.js";
    
    document.body.appendChild(script);
  }

  render() {
    return (
      <div onload={this.initGapi()}>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <button onclick="signOut();">Sign out</button>
      </div>
    );
  }
}

export default SignOn;