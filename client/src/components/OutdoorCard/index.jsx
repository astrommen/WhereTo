import React, { Component }  from 'react';
import { Container, Row, Col } from "../Grid"
import { SiteBtn, SaveBtn} from "../Buttons"
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;
color: white;`

const Title = styled.h3 `
color: white;
`

const White = styled.p `
color: white;
`

function OutdoorCard(props) {
  return(
    <div>
    <Container>
      <Row>
        <Col size="md-6">
          <Title>{props.name}</Title>
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
                <White>{props.activities.map(activity => 
                  activity.ActivityName ).join(", ")}</White>
              </Col>

              <Col size="md-1"><White>Address:</White> </Col>
              <Col size="md-4">
                <White>{props.street}</White>
                <White>{props.city} , {props.state} {props.postalCode}</White>
              </Col>
            </Row>

            <Row>
              <Col size="md-12">
                <White>Description: {props.description}</White>
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
