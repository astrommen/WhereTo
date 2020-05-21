import React from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn} from "../Buttons";
import {Icon, Image, Title, Website, White} from "../Styled";

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
        <Col size="md-4">
          <Image className="img-fluid" src={props.image} alt={props.name} />
        </Col>
        <Col size="md-8">
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
