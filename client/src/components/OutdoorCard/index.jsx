import React  from 'react';
import { Container, Row, Col } from "../Grid";
import { SiteBtn, SaveBtn, DisabledBtn} from "../Buttons";
import {Image, ImgDes, Title, White} from "../Styled";

function OutdoorCard(props) {
  return(
    <div>
    <Container>
      <Row>
      <Col size="md-1"><Event src={process.env.PUBLIC_URL + './img/activities/hiking.png'} className="img-fluid" alt="sightseeing icon" /></Col>
        <Col size="md-7">
          <Title>{props.name}</Title>
        </Col>
        <Col size="md-4">
          {props.link === "missing" ? <DisabledBtn>Missing</DisabledBtn> : <SiteBtn href={props.link}> Park Site </SiteBtn> }
          <SaveBtn onClick={() => this.saveSite(props.site)} />        
        </Col>
      </Row>

      <Row>
        <Col size="md-5">
          <Image className="img-fluid" src={props.images[0] ? props.images[0].URL : "./img/location/noImage.png"} alt={props.site} />
          <ImgDes>{props.images[0] ? props.images[0].Description : ""}</ImgDes>
        </Col>
        <Col size="md-7">
          <Container>
            <Row>
              <Col size="md-12">
                <White><Identify>Address: </Identify>{props.street}, {props.city}, {props.state} {props.postalCode}</White>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <White><Identify>Directions: </Identify>{props.directions}</White>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <White><Identify>Activities Available at Park: </Identify>{props.activities.map(activity => 
                  activity.ActivityName ).join(", ")}</White>
              </Col>
            </Row>

          </Container>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <White><Identify>Description: </Identify>{props.description}</White>
        </Col>     
      </Row>

    </Container>
    </div>

  );
}

export default OutdoorCard;
