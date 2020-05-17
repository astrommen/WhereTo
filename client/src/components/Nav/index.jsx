import React, { Component } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
width: 20%;
height: 20%;
`
const NavBar = styled.nav `
position: fixed;
top: 0;
right: 0;
background-color: black;
`
const Item = styled.li `
background-color: purple;
color: white;
width: 125px;
padding: 0.5rem 1rem`

function Navbar() {
  return(
    <NavBar className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
      <Logo className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
      </Link>
      <div>
        <ul className="navbar-nav">
          <Item className="nav-item">
            <Link to="/"
            className={
              window.location.pathname === "/" ? "active" : ""
            }>Profile</Link>
          </Item>
          <Item className="nav-item">
            <Link to="/dayplanner"
            className={
              window.location.pathname === "/dayplanner" ? "active" :
              "nave-link"
            }>Day Planner</Link>
          </Item>
          <Item className="nav-item">
            <Link to="/food"
            className={
              window.location.pathname === "/food" ? "active" :
              ""
            }>Eat/Drink</Link>
          </Item>
          <Item className="nav-item">
            <Link to="/events"
            className={
              window.location.pathname === "/events" ? "active" :
              ""
            }>Events</Link>
          </Item>

          <Item className="nav-item">
            <Link to="/outdoors"
            className={
              window.location.pathname === "/outdoors" ? "nav-link active" :
              "nave-link"
            }>Outdoors</Link>
          </Item>
        </ul>
      </div>
    </NavBar>
  )
}

export default Navbar;
