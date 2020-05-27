import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col } from "../Grid";
import { Pin } from "../Styled";
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
          <Pin className="pinpoint img-fluid" src={process.env.PUBLIC_URL + './img/WT.png'} alt="daytrip" />
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
