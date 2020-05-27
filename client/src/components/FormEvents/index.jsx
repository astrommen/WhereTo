import React from "react";
import { Label, Wrapper, Submit } from "../Styled";
import { Container, Row, Col } from "../Grid";
import "./style.css";


function FormEvents(props) {
  return (
    <Wrapper>
      <Container>
        <form className="mt-4" >

          <Row className="text-center">
            <Col size="sm-3">
              <input type="checkbox" id="cb1"
                name="concert"
                value="concert"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb1"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/concert.png"} /><p>Concert</p></Label>
            </Col>

            <Col size="sm-3">
              <input type="checkbox" id="cb2"
                name="sports"
                value="sports"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb2"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/sports.png"} /><p>Sports</p></Label>
            </Col>

            <Col size="sm-3">
              <input type="checkbox" id="cb3"
                name="theatre"
                value="theatre"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb3"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/theatre.png"} /><p>Theatre</p></Label>
            </Col>
          </Row>

          <Row className="text-center">
            <Col size="sm-3">
              <input type="checkbox" id="cb4"
                name="film"
                value="film"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb4"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/movies.png"} /><p>Film</p></Label>
            </Col>

            <Col size="sm-3">
              <input type="checkbox" id="cb5"
                name="family"
                value="family"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb5"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/family.png"} /><p>Family</p></Label>
            </Col>

            <Col size="sm-3">
              <Submit type="Submit" onClick={props.handleFormSubmit}><i className="fas fa-ticket-alt"></i> Submit</Submit>
            </Col>
          </Row>


        </form>
      </Container>
    </Wrapper>
  );
}


export default FormEvents;

