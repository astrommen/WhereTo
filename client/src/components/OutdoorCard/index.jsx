import React  from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn} from "../Buttons";
import {Image, ImgDes, Title, White} from "../Styled";

function OutdoorCard(props) {
  return(
    <div>
    <Container>
      <Row>
        <Col size="md-8">
          <Title>{props.name}</Title>
        </Col>
        <Col size="md-4">
          <SiteBtn href={props.link}> Park Site </SiteBtn>
          <SaveBtn onClick={() => this.saveSite(props.site)} />
        </Col>
      </Row>

      <Row>
        <Col size="md-5">
          <Image className="img-fluid" src={props.images[0].URL} alt={props.images[0].Description} />
          <ImgDes>{props.images[0].Description}</ImgDes>
        </Col>
        <Col size="md-7">
          <Container>
            <Row>
              <Col size="md-12">
                <White>Address: {props.street}, {props.city}, {props.state} {props.postalCode}</White>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <White>Directions: {props.directions}</White>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <White>{props.activities.map(activity => 
                  activity.ActivityName ).join(", ")}</White>
              </Col>
            </Row>

          </Container>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <White>Description: {props.description}</White>
        </Col>     
      </Row>

    </Container>
    </div>

  );
}

export default OutdoorCard;
