import React from "react";
import { Container, Row, Col } from "../Grid"
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;`

const White = styled.p `
color: white;
`
const ALink = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
}
`


function YelpCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-12">
          <White><ALink href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</ALink></White>
        </Col>
      </Row>
      <Row>
        <Col size="md-3">
          <Image src={props.image} alt="eatery image" className="img-fluid" />
        </Col>
        <Col size="md-1">
          <White>Address:</White>
        </Col>
        <Col size="md-4">
          <White>{props.street}</White>
          <White>{props.city}, {props.state} {props.zip}</White>
          <White>Phone: {props.phone}</White>
        </Col>
        <Col size="md-4">
          <White>Rating: {props.rating}/5</White>
          <White>Reviews: {props.reviews}</White>
        </Col>
      </Row>
    </Container>
  )
}

export default YelpCard;
