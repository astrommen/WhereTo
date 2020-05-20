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

function WalkCard(props) {
  console.log(props.stops[0])
  return(
    <Container>
      {/* <Row><Title>{props.stops[0].coordinates.latitude}</Title></Row> */}
      <Row>
        <Col size="md-6"><White>Time: {props.walkTime}</White></Col>
        <Col size="md-6"><White>Distance: {props.distance}</White></Col>
        <Col size="md-6"></Col>
      </Row>
      {/* {props.stops.map( stop => 
        <Row> 
          <Col size="md-12"><p>{stop.poi.name}</p></Col>
          <Col size="md-6"><p>{stop.poi.snippet}</p></Col>
        </Row>
        )} */}
    </Container>
  )
}


export default WalkCard;
