import React from "react";
import {Container, Row, Col} from "../Grid";
import {SiteBtn, SaveBtn} from "../Buttons";
import {Image, Title, White, Event, Identify } from "../Styled";

function TripCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/sightseeing.png'} className="img-fluid" alt="sightseeing icon" /></Col>
        <Col size="md-6"><Title>{props.name}</Title></Col>
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
            <Col size="md-12"><White><Identify>{props.openNow}</Identify></White></Col>
          </Row>
          <Row>
            <Col size="md-12"><White>{props.rank}</White></Col>
          </Row>
          <Row>
            <Col size="md-6"><White><Identify>Phone: </Identify>{props.phone}</White></Col>
            <Col size="md-6"><White><Identify>Address: </Identify>{props.address}</White></Col>
          </Row>
        </Container>
        </Col>
      </Row>
      <Row>
          <Col size="md-12"><White>{props.description}</White></Col>
      </Row>
    </Container>
  )

  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/sightseeing.png'} className="img-fluid" alt="sightseeing icon" /></Col>
          <Col size="md-6"><Title>{this.props.name}</Title></Col>
          <Col size="md-5">
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
    )
  }
}


export default TripCard;
