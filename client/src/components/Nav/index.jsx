import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "../Grid";
import "./style.css";


function Nav(props) {
  return(
    <Container>
      <Row>
        <Col size="md-2">
          <Link className="navbar-brand" to="/profile">
          <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
          </Link>
        </Col>
        <Col size="md-2">
          <Link className="navbar-brand"  to={props.local ? "/daytrip" : "/vacation"}>
          <img className="pinpoint img-fluid" src='./img/WT.png' alt="daytrip" />
          </Link>
        </Col>
        <Col size="md-2">
        <Link to="/trip"
            className={
              window.location.pathname === "/trip" ? "tab-active" : "tab"
            }>Sightseeing</Link>
        </Col>
        <Col size="md-2">
        <Link to="/food"
            className={
              window.location.pathname === "/food" ? "tab-active" : "tab"
            }>Eat/Drink</Link>
        </Col>
        <Col size="md-2">
        <Link to="/events"
            className={
              window.location.pathname === "/events" ? "tab-active" : "tab"
            }>Events</Link>
        </Col>
        {/* <Col size="md-1">
        <Link to="/walk"
            className={
              window.location.pathname === "/walk" ? "tab-active" : "tab"
            }>Walk</Link>
        </Col> */}
        <Col size="md-2">
        <Link to="/outdoors"
            className={
              window.location.pathname === "/outdoors" ? "tab-active" : "tab"
            }>Outdoors</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Nav;
