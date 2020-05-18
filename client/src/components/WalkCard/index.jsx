import React, { Component } from "react";
import {Container, Row, Col} from "../Grid";
import "./style.css";

function WalkCard(props) {
  console.log("props" + JSON.stringify(props.poi))
  return(
    <Container>
      <Row>
        <Col size="md-6"><p>Time: {props.walkTime}</p></Col>
        <Col size="md-6"><p>Distance: {props.distance}</p></Col>
      </Row>
      {/* <Row>
        <Col size="md-12"><p>{props.stops.poi.name}</p></Col>
        <Col size="md-6"><p>{props.stops[0].poi.snippet}</p></Col>

      </Row> */}
    </Container>
  )
}


export default WalkCard;
