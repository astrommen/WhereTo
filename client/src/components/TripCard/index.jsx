import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn } from "../Buttons";
import { Image, Title, White, Event, Identify } from "../Styled";
import API from "../../utils/API";

class TripCard extends Component {

  saveEvent = (trip) => {
    console.log(trip)
    console.log(localStorage.getItem('vacaId'))
    API.saveSightseeing(localStorage.getItem('vacaId'), trip)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="mt-3">
        <Container>
          <Row>
            {/* <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/sightseeing.png'} className="img-fluid" alt="sightseeing icon" /></Col> */}
            <Col size="md-6"><Title>{this.props.name}</Title></Col>
            <Col size="md-6">
              <SiteBtn href={this.props.website}> Offical Site </SiteBtn>
              <SaveBtn onClick={() => this.saveEvent(this.props)} />
            </Col>
          </Row>
          <Row>
            <Col size="md-4"><Image src={this.props.image} className="img-fluid" alt="location image" /> </Col>
            <Col size="md-8">

              <Container>
                <Row>
                  <Col size="md-12"><White><Identify>{this.props.openNow}</Identify></White></Col>
                </Row>
                <Row>
                  <Col size="md-12"><White>{this.props.rank}</White></Col>
                </Row>
                <Row>
                  <Col size="md-6"><White><Identify>Phone: </Identify>{this.props.phone}</White></Col>
                  <Col size="md-6"><White><Identify>Address: </Identify>{this.props.address}</White></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col size="md-12"><White>{this.props.description}</White></Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default TripCard;
