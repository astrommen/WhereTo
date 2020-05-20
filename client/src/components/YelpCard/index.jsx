import React from "react";
import { Container, Row, Col } from "../Grid"
import {SaveBtn, SiteBtn} from "../Buttons"
import {Image, White, Title} from "../Styled";


function YelpCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-8">
          <Title>{props.name}</Title>
        </Col>
        <Col size="md-4">
          <SiteBtn href={props.link}> Official Site </SiteBtn>
          <SaveBtn onClick={() => this.saveSite(props.restaurant)} />
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
