import React, { Component }  from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SeatmapBtn, SaveBtn} from "../Buttons"
import "./style.css";
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
const White = styled.p `
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

function TicketmasterCard(props) {
  console.log(props)
  return(
    <Container>
      <Row>
        <Col size="md-8">
          <Title>{props.name}</Title>
        </Col>
        <Col size="md-4">
          <SiteBtn href={props.url}> Offical Site </SiteBtn>
          <SaveBtn onClick={() => this.saveEvent(props.activity)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Image className="img-fluid" src={props.image} alt={props.name} />
        </Col>
        <Col size="md-6">
        <Container>
          <Row>
          <Col size="md-6"><White>Date: {props.localDate} </White></Col>
          <Col size="md-6"><White>Time: {props.localStartTime}</White></Col>
          {/* <p>Price: {props.priceMin} - {props.priceMax} {props.currency}</p> */}
          </Row>
          <Row>
            <Col size="md-6">
              <White>
                <Website href={props.venueUrl} target="_blank" rel="noopener noreferrer"><Icon src="./img/location/stadium.png" alt="seatMap" />
                {props.venueName}
                </Website>
              </White>
              </Col>
              <Col size="md-6">
              {props ? <Website href={props.seatmapLink} target="_blank" rel="noopener noreferrer">
              <Icon src="./img/location/seat.png" alt="seatMap" /> SeatMap
              </Website> : <p>"Seat Map Not Available"</p>}
            </Col>
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TicketmasterCard;
