import React from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn} from "../Buttons";
import {Icon, Image, Title, Website, White, Event, Identify, Center} from "../Styled";

function TicketmasterCard(props) {
  return(
    <Container>
      <Row>
      <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/concert.png'} className="img-fluid" alt="sightseeing icon" /></Col>
        <Col size="md-7">
          <Title>{props.name}</Title>
        </Col>
        <Col size="md-4">
          <SiteBtn href={props.url}> Offical Site </SiteBtn>
          <SaveBtn onClick={() => this.saveEvent(props.activity)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <Image className="img-fluid" src={props.image} alt={props.name} />
        </Col>
        <Col size="md-8">
        <Container>
          <Row>
          <Col size="md-6"><White><Identify>Date: </Identify>{props.localDate} </White></Col>
          <Col size="md-6"><White><Identify>Time: </Identify>{props.localStartTime}</White></Col>
          {/* <p>Price: {props.priceMin} - {props.priceMax} {props.currency}</p> */}
          </Row>
          <Row>
            <Col size="md-6">
                <Website href={props.venueUrl} target="_blank" rel="noopener noreferrer">
                  <Icon src="./img/location/stadium.png" alt="stadium icon" />
                  {props.venueName}
                </Website>
            </Col>
            <Col size="md-6">
              {props.seatmapLink === ""  ? <Center>Seatmap not Available or Required</Center> : <Website href={props.seatmapLink} target="_blank" rel="noopener noreferrer">
              <Icon src="./img/location/seat.png" alt="seatMap" /> SeatMap
              </Website> }
            </Col>
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TicketmasterCard;
