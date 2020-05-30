import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn, DisabledBtn } from "../Buttons";
import { Image, ImgDes, Title, White, Event, Identify } from "../Styled";
import API from "../../utils/API";

class OutdoorCard extends Component {

  saveEvent = (trip) => {
    console.log(trip)
    console.log(localStorage.getItem('vacaId'))
    API.saveOutdoorArea(localStorage.getItem('vacaId'), trip)
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
            {/* <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/hiking.png'} className="img-fluid" alt="sightseeing icon" /></Col> */}
            <Col size="md-6">
              <Title>{this.props.name}</Title>
            </Col>
            <Col size="md-6">
              {this.props.link === "missing" ? <DisabledBtn>No Park Website</DisabledBtn> : <SiteBtn href={this.props.link}> Park Website </SiteBtn>}
              <SaveBtn onClick={() => this.saveEvent(this.props)} />
            </Col>
          </Row>

          <Row>
            <Col size="md-4">
              <Image className="" src={this.props.images[0] ? this.props.images[0].URL : "./img/location/noImage.png"} alt={this.props.site} />
              <ImgDes>{this.props.images[0] ? this.props.images[0].Description : ""}</ImgDes>
            </Col>
            <Col size="md-8">
              <Container>
                <Row>
                  <Col size="md-12">
                    <White><Identify>Address: </Identify>{this.props.street}, {this.props.city}, {this.props.state} {this.props.postalCode}</White>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12">
                    <White><Identify>Directions: </Identify>{this.props.directions}</White>
                  </Col>
                </Row>

                <Row>
                  <Col size="md-12">
                    <White><Identify>Activities Available at Park: </Identify>{this.props.activities.map(activity =>
                      activity.ActivityName).join(", ")}</White>
                  </Col>
                </Row>

              </Container>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <White><Identify>Description: </Identify>{this.props.description}</White>
            </Col>
          </Row>

        </Container>
      </div>

    );
  }
}

export default OutdoorCard;
