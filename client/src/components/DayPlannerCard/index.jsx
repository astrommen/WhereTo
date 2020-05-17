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

const LocDes = styled.p`
color: white;`

function DayPlannerCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-4"><Title>{props.name}</Title></Col>
        <Col size="md-8"><SaveBtn onClick={() => this.savePlan(props.dayplan)}/></Col>
      </Row>
      <Row>
        <Col size="md-12"><LocDes>{props.locDescription}</LocDes></Col>
      </Row>
      {/* {props.dayplans.map(day => {

      })} */}
    </Container>
  )

}

export default DayPlannerCard;
