import React, { Component } from "react";
import "./style.css";

export function SaveOutdoor () {
  return (
    <div className='card text-center mt-2'>
      <div className="overflow">
      <img className="event" src={process.env.PUBLIC_URL + './img/location/noImage.png'} alt="logo" />
       </div>
      <div className="card-body text-dark">
        <h4 style={{textAlign: "left"}}>Event</h4>
        <p className="card-text text-secondary">
          Info about the card
        </p>
      </div>
    </div>
  );
}
  
