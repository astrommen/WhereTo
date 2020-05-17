import React, { Component } from "react";
import {Container, Row, Col} from "../Grid";
import styled from "styled-components";

const Title = styled.h3 `
color: white;
`

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const White = styled.p `
color: white;
`

function CountryCard(props) {
  console.log("prop info: " + JSON.stringify(props.info.languages))
  return(
    <Container>
      <Row>
        <Col size="md-3"><Image src={props.flag} className="img-fluid" alt="flag" /></Col>
        <Col size="md-9">
          <Title>{props.id}</Title>
          <White>Language: {props.languages}</White>
          <White>Currency: {props.currencies}</White>
          </Col>
      </Row>
    </Container>
  )
}

export default CountryCard;
