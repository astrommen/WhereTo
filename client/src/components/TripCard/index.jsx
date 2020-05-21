import React from "react";
import {Container, Row, Col} from "../Grid";
import {SiteBtn, SaveBtn} from "../Buttons";
import {Image, Title, White } from "../Styled";

function TripCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-7"><Title>{props.name}</Title></Col>
        <Col size="md-5">
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
