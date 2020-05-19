import React from "react";
import {Container, Row, Col} from "../Grid";
import "./style.css";

function TripCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-12"><p>{props.name}</p></Col>
      </Row>
      <Row>
        <Col size="md-8"><p>{props.description}</p></Col>
        <Col size="md-4">
          <p>Phone: {props.phone}</p>
          <p>Address: {props.address}</p>
          <p>Open Now: {props.openNow}</p>          
          </Col>
      </Row>
    </Container>
  )

}

export default TripCard;
