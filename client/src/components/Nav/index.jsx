import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../Grid";
import { Pin } from "../Styled";
import "./style.css";


function Nav(props) {
  return (
    <Container>
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
          <Link className="navbar-brand" to="/profile">
            <img className="logo mb-" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
          </Link>
        </div>
        <div className="col-md-2 text-center">
          <Link to={props.local ? "/daytrip" : "/vacation"}>
            <Pin className="pinpoint img-fluid" src={process.env.PUBLIC_URL + './img/WT.png'} alt="daytrip" />Trip Info
          </Link>
        </div>
        <div className="col-md-2 text-center">
          <Link to="/trip"
            className={
              window.location.pathname === "/trip" ? "tab-active" : "tab"
            }>Sightseeing</Link>
        </div>
        <div className="col-md-2 text-center">
          <Link to="/food"
            className={
              window.location.pathname === "/food" ? "tab-active" : "tab"
            }>Eat/Drink</Link>
        </div>
        <div className="col-md-2 text-center">
          <Link to="/events"
            className={
              window.location.pathname === "/events" ? "tab-active" : "tab"
            }>Events</Link>
        </div>
        {/* <div className="col-md-1">
        <Link to="/walk"
            className={
              window.location.pathname === "/walk" ? "tab-active" : "tab"
            }>Walk</Link>
        </div> */}
        <div className="col-md-2 text-center">
          <Link to="/outdoors"
            className={
              window.location.pathname === "/outdoors" ? "tab-active" : "tab"
            }>Outdoors</Link>
        </div>
      </div>
    </Container>
  )
}

export default Nav;
