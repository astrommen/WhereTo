import React from "react";
import {Container, Row, Col} from "../Grid";
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

function TripCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-12"><p>{props.name}</p></Col>
      </Row>
      <Row>
        <Col size="md-3"><Image src={props.image} className="img-fluid" alt="location image"/> </Col>
        <Col size="md-6"><p>{props.description}</p></Col>
        <Col size="md-3">
          <p>Phone: {props.phone}</p>
          <p>Address: {props.address}</p>
          <p>Open Now: {props.openNow}</p>          
          </Col>
      </Row>
    </Container>
  )

}

export default TripCard;
