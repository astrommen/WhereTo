import React, { Component } from "react";
import { Container, Col, Row } from "../Grid";
import { Card } from 'react-bootstrap';
import "./style.css";

export function SaveOutdoor (props) {
  return (
    <div className='card text-center mt-2'>
      <Card.Img variant="top"  src={process.env.PUBLIC_URL + './img/location/noImage.png'} alt="event logo" />
      <Row>
        <Col size="md-3">
        <img className="img-fluid logo" src={process.env.PUBLIC_URL + './img/activities/concert.png'} alt="event logo" />
        </Col>
        <Col size="md-9">
        <h4 style={{textAlign: "left"}}>Event</h4>
        </Col>
      </Row>
      <div className="overflow">
       </div>
      <Row className="card-body text-dark">
        <p className="card-text text-secondary">
          {props.venueStreet}
        </p>
      </Row>
    </div>
  );
}
  
