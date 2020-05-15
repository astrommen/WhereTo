import React, { Component } from "react";
import { Container, Row, Col } from "../Grid"
import "./style.css";
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;`

function OutdoorCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-7">
          Name
        </Col>
        <Col size="md-1"><h5>Address:</h5> </Col>
        <Col size="md-4">
          <p>{props.street}</p>
          <p>{props.city} , {props.state} {props.postalCode}</p>
        </Col>
      </Row>

      <Row>
        <Col size="md-3">
          <Image href={props.images[0].URL} alt={props.images[0].Description} />
          <ImgDes>{props.images[0].Description}</ImgDes>
        </Col>
        <Col size="md-9">
          <p>{props.activities.map(activity => props.activites.length - 1 === props.activities.indexOf(activity) ?  
          activity.ActivityName : activity.ActivityName + ", ")}</p>
          <p>Description: {props.description}</p>
        </Col>
      </Row>

    </Container>

  );
}

export default OutdoorCard;
