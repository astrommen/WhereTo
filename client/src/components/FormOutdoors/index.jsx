import React from "react";
import {Label, Wrapper, Submit} from "../Styled";
import {Container, Row, Col} from "../Grid";
import "./style.css";


function FormOutdoors(props) {
  return (
    <Wrapper>
      <Container>
      <form className="mt-4" >
      
        <Row className="text-center">
          <Col size="sm-3">
            <input type="checkbox" id="cb1"
              name="hiking"
              value="hiking,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb1"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/hiking.png"} /><p>Hiking</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb2"
              name="boating"
              value="boating,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb2"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/boating.png"} /><p>Boating</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb3"
              name="fishing"
              value="fishing,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb3"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/fishing.png"} /><p>Fishing</p></Label>
          </Col>
        </Row>

        <Row className="text-center">
          <Col size="sm-3">
            <input type="checkbox" id="cb4"
              name="beach"
              value="beach,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb4"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/beach.png"} /><p>Beach</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb5"
              name="swimming"
              value="swimming,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb5"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/swim.png"} /><p>Swimming</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb6"
              name="camping"
              value="camping,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb6"><img  className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/camping.png"} /><p>Camping</p></Label>
          </Col>
        </Row>

        <Row className="text-center">
          <Col size="md-4">
            <Submit type="Submit" onClick={props.handleFormSubmit}><i className="fas fa-hiking"></i> Submit</Submit>
          </Col>
        </Row>

      </form>
    </Container>
    </Wrapper>
  );
}


export default FormOutdoors;

