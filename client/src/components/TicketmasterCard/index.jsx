import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn } from "../Buttons";
import { Icon, Image, Title, Website, White, Event, Identify, Center } from "../Styled";
import API from "../../utils/API";


class TicketmasterCard extends Component {

  saveEvent = (trip) => {
    console.log(trip)
    console.log(localStorage.getItem('vacaId'))
    API.saveTicketmaster(localStorage.getItem('vacaId'), trip)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/concert.png'} className="img-fluid" alt="sightseeing icon" /></Col>
          <Col size="md-7">
            <Title>{this.props.name}</Title>
          </Col>
          <Col size="md-4">
            <SiteBtn href={this.props.url}> Offical Site </SiteBtn>
            <SaveBtn onClick={() => this.saveEvent(this.props)} />
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Image className="img-fluid" src={this.props.image} alt={this.props.name} />
          </Col>
          <Col size="md-8">
            <Container>
              <Row>
                <Col size="md-6"><White><Identify>Date: </Identify>{this.props.localDate} </White></Col>
                <Col size="md-6"><White><Identify>Time: </Identify>{this.props.localStartTime}</White></Col>
                {/* <p>Price: {this.props.priceMin} - {this.props.priceMax} {this.props.currency}</p> */}
              </Row>
              <Row>
                <Col size="md-6">
                  <Website href={this.props.venueUrl} target="_blank" rel="noopener noreferrer">
                    <Icon src="./img/location/stadium.png" alt="stadium icon" />
                    {this.props.venueName}
                  </Website>
                </Col>
                <Col size="md-6">
                  {this.props.seatmapLink === "" ? <Center>Seatmap not Available or Required</Center> : <Website href={this.props.seatmapLink} target="_blank" rel="noopener noreferrer">
                    <Icon src="./img/location/seat.png" alt="seatMap" /> SeatMap
              </Website>}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TicketmasterCard;
