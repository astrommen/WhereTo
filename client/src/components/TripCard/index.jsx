import React from "react";
import {Container, Row, Col} from "../Grid";
import {SiteBtn, SaveBtn} from "../Buttons";
import styled from "styled-components";

const Icon = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
heigth: 15%;
width: 15%;
`
const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

const Title = styled.h3 `
color: white;
`

const Website = styled.a `
text-decoration: none;
text-align: center;
color: white;

& :link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px #60144C;
}
`
const White = styled.p `
color: white;
`

function TripCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-8"><Title>{props.name}</Title></Col>
        <Col size="md-4">
          <SiteBtn href={props.website}> Offical Site </SiteBtn>
          <SaveBtn onClick={() => this.saveSite(props.poi)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-4"><Image src={props.image} className="img-fluid" alt="location image"/> </Col>
        <Col size="md-8">

        <Container>
          <Row>
            <Col size="md-9"><White>{props.rank}</White></Col>
            <Col size="md-3"><White>{props.openNow}</White></Col>
          </Row>
          <Row>
            <Col size="md-3"><White>Phone: {props.phone}</White></Col>
            <Col size="md-9"><White>Address: {props.address}</White></Col>
          </Row>
          <Row>
          <Col size="md-12"><White>{props.description}</White></Col>
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  )

}

export default TripCard;
