import React, { Component } from "react";
import { Container, Row, Col } from "../Grid"
import {SaveBtn, SiteBtn} from "../Buttons"
import {Image, White, Title, Event, Identify} from "../Styled";


function YelpCard(props) {
  return(
    <Container>
      <Row>
      <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/food.png'} className="img-fluid" alt="sightseeing icon" /></Col>
        <Col size="md-7">
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
        <Col size="md-9">
          <White><Identify>Phone: </Identify>{props.phone}</White>
          <White><Identify>Address: </Identify>{props.street}</White>
          <White>{props.city}, {props.state} {props.zip}</White>
          <White>{props.rating}/5 out of {props.reviews} reviews</White>
          {/* <White>{props.transactions[0]} </White> */}
        </Col>
      </Row>
    </Container>
  )
}

export default YelpCard;
