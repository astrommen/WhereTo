import React, { Component }  from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SeatmapBtn, SaveBtn} from "../Buttons"
import "./style.css";
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

const VenueLink = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
}
`

function TicketmasterCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-6">
          <h3>{props.name}</h3>
        </Col>
        <Col size="md-6">
          <SiteBtn href={props.url}> Event Site </SiteBtn>
          <SaveBtn onClick={() => this.saveEvent(props.activity)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Image className="img-fluid" src={props.image} alt={props.name} />
        </Col>
        <Col size="md-6">
          <p>Date: {props.localDate} Time: {props.localStartTime}</p>
          <p>Price: {props.priceMin} - {props.priceMax} {props.currency}</p>
        <Container>
          <Row>
            <Col size="md-8">
              <p><VenueLink href={props.venueUrl} target="_blank" rel="noopener noreferrer">{props.venueName}</VenueLink></p>
            </Col>
            <Col size="md-4">
              {/* <SeatmapBtn /> */}
            </Col>
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TicketmasterCard;
