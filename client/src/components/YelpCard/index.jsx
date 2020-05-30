import React, { Component } from "react";
import { Container, Row, Col } from "../Grid"
import { SaveBtn, SiteBtn } from "../Buttons"
import { Image, White, Title, Event, Identify } from "../Styled";
import API from "../../utils/API";



class YelpCard extends Component {

  saveEvent = (trip) => {
    console.log(trip)
    console.log(localStorage.getItem('vacaId'))
    API.saveFood(localStorage.getItem('vacaId'), trip)
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
            {/* <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/food.png'} className="img-fluid" alt="sightseeing icon" /></Col> */}
            <Col size="md-6">
              <Title>{this.props.name}</Title>
            </Col>
            <Col size="md-6">
              <SiteBtn href={this.props.link}> Official Site </SiteBtn>
              <SaveBtn onClick={() => this.saveEvent(this.props)} />
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              <Image src={this.props.image} alt="eatery image" className="img-fluid" />
            </Col>
            <Col size="md-9">
              <White><Identify>Phone: </Identify>{this.props.phone}</White>
              <White><Identify>Address: </Identify>{this.props.street}</White>
              <White>{this.props.city}, {this.props.state} {this.props.zip}</White>
              <White>{this.props.rating}/5 out of {this.props.reviews} reviews</White>
              {/* <White>{props.transactions[0]} </White> */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default YelpCard;
