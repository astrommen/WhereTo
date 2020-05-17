import React, { Component }  from 'react';
import { Container, Row, Col } from "../Grid"
import { SiteBtn, SaveBtn} from "../Buttons"
import Nav from "../Nav";
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;`

function OutdoorCard(props) {
  return(
    <div>
      <Nav />
    <Container>
      <Row>
        <Col size="md-6">
          <h3>{props.name}</h3>
        </Col>
        <Col size="md-6">
          <SiteBtn href={props.link}> Park Site </SiteBtn>
          <SaveBtn onClick={() => this.saveSite(props.site)} />
        </Col>
      </Row>

      <Row>
        <Col size="md-3">
          <Image className="img-fluid" src={props.images[0].URL} alt={props.images[0].Description} />
          <ImgDes>{props.images[0].Description}</ImgDes>
        </Col>
        <Col size="md-9">
          <Container>
            <Row>
              <Col size="md-7">
                <p>{props.activities.map(activity => 
                  activity.ActivityName ).join(", ")}</p>
              </Col>

              <Col size="md-1"><h5>Address:</h5> </Col>
              <Col size="md-4">
                <p>{props.street}</p>
                <p>{props.city} , {props.state} {props.postalCode}</p>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <p>Description: {props.description}</p>
              </Col>     
            </Row>
          </Container>
        </Col>
      </Row>

    </Container>
    </div>

  );
}

export default OutdoorCard;
