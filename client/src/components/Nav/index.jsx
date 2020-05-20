import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from "../Grid";
import styled from "styled-components";

// const Item = styled.li `
// background-color: #60144c;
// color: white;
// width: 125px;
// padding: 0.5rem 1rem`


function Nav() {
  return(
    <Container>
      <Row>
        <Col size="md-2">
          <Link className="navbar-brand" to="/">
          <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
          </Link>
        </Col>
        <Col size="md-2">
        <Link to="/"
            className={
              window.location.pathname === "/" ? "active" : ""
            }>Profile</Link>
        </Col>
        <Col size="md-2">
        <Link to="/trip"
            className={
              window.location.pathname === "/trip" ? "active" :
              "nave-link"
            }>Trip</Link>
        </Col>
        <Col size="md-2">
        <Link to="/food"
            className={
              window.location.pathname === "/food" ? "active" :
              ""
            }>Eat/Drink</Link>
        </Col>
        <Col size="md-1">
        <Link to="/events"
            className={
              window.location.pathname === "/events" ? "active " :
              ""
            }>Events</Link>
        </Col>
        <Col size="md-1">
        <Link to="/walk"
            className={
              window.location.pathname === "/walk" ? "active " :
              ""
            }>Walk</Link>
        </Col>
        <Col size="md-2">
        <Link to="/outdoors"
            className={
              window.location.pathname === "/outdoors" ? "active " :
              ""
            }>Outdoors</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Nav;

// function Navbar() {
//   return(
//     <NavBar className="navbar navbar-expand-lg navbar-light">
//       <Link className="navbar-brand" to="/">
//       <Logo className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <Item className="nav-item">
//             <Link to="/"
//             className={
//               window.location.pathname === "/" ? "active" : ""
//             }>Profile</Link>
//           </Item>
//           <Item className="nav-item">
//             <Link to="/dayplanner"
//             className={
//               window.location.pathname === "/dayplanner" ? "active" :
//               "nave-link"
//             }>Day Planner</Link>
//           </Item>
//           <Item className="nav-item">
//             <Link to="/food"
//             className={
//               window.location.pathname === "/food" ? "active" :
//               ""
//             }>Eat/Drink</Link>
//           </Item>
//           <Item className="nav-item">
//             <Link to="/events"
//             className={
//               window.location.pathname === "/events" ? "active " :
//               ""
//             }>Events</Link>
//           </Item>

//           <Item className="nav-item">
//             <Link to="/outdoors"
//             className={
//               window.location.pathname === "/outdoors" ? "active " :
//               ""
//             }>Outdoors</Link>
//           </Item>
//         </ul>
//       </div>
//     </NavBar>
//   )
// }

