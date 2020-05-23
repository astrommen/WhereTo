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
        <Col size="md-6">
          <White>Address: {props.street}</White>
          <White>{props.city}, {props.state} {props.zip}</White>
        </Col>
        <Col size="md-3">
          <White>{props.rating}/5 out of {props.reviews} reviews</White>
          <White>Phone: {props.phone}</White>
          {/* <White>{props.transactions[0]} </White> */}
        </Col>
      </Row>
    </Container>
  )
}

export default YelpCard;
