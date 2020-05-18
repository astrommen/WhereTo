import React, { Component }  from 'react';
import { Container, Row, Col } from "../Grid"
import { SaveBtn} from "../Buttons"
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

const Title = styled.h3 `
color: white;
`

const LocDes = styled.p `
color: white;
font-weight: bold;`

const White = styled.p `
color: white;
`

function DayPlannerCard(props) {
  // console.log("testing: " + JSON.stringify(props.days))
  return(
<Container>
      <Row>
        <Col size="md-4"><Image  className="img-fluid" src={props.image} alt={props.location}/></Col>
        <Col size="md-4">
          <Title>{props.name}</Title>
          <LocDes>{props.locDescription}</LocDes>
          </Col>
        <Col size="md-4"><SaveBtn onClick={() => this.savePlan(props.dayplan)}/></Col>
      </Row>
      <Row>
        <Col size="md-12"></Col>
      </Row>
      <Row>
        <Col size="md-6"><White>Day 1: {props.date1}</White></Col>
        <Col size="md-6"><White>Day 2: {props.date2}</White></Col>
      </Row>
      <Row>
        {/* <Col size="md-6"><White>{props.item1[0].title}</White></Col>
        <Col size="md-6"><White>{props.item2[0].title}</White></Col> */}

      </Row>

    </Container>
  )

}

export default DayPlannerCard;
