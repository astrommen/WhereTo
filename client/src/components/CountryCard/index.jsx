import React, { Component } from "react";
import {Container, Row, Col} from "../Grid";

function CountryCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-12"><p>{props.id}</p></Col>
      </Row>
    </Container>
  )
}

export default CountryCard;
