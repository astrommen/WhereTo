import React from "react";
import {Label, Wrapper} from "../Styled";
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
            <Label htmlFor="cb1"><img  className="img-fluid" alt="" src="./img/activities/hiking.png" /><p>Hiking</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb2"
              name="boating"
              value="boating,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb2"><img  className="img-fluid" alt="" src="./img/activities/boating.png" /><p>Boating</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb3"
              name="fishing"
              value="fishing,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb3"><img  className="img-fluid" alt="" src="./img/activities/fishing.png" /><p>Fishing</p></Label>
          </Col>
        </Row>

        <Row className="text-center">
          <Col size="sm-3">
            <input type="checkbox" id="cb4"
              name="beach"
              value="beach,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb4"><img  className="img-fluid" alt="" src="./img/activities/beach.png" /><p>Beach</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb5"
              name="swimming"
              value="swimming,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb5"><img  className="img-fluid" alt="" src="./img/activities/swim.png" /><p>Swimming</p></Label>
          </Col>

          <Col size="sm-3">
            <input type="checkbox" id="cb6"
              name="camping"
              value="camping,"
              defaultChecked={props.value}
              onChange={props.handleInputChange} />
            <Label htmlFor="cb6"><img  className="img-fluid" alt="" src="./img/activities/camping.png" /><p>Camping</p></Label>
          </Col>
        </Row>

        <Row className="text-center">
          <Col size="md-4">
            <button type="Submit" onClick={props.handleFormSubmit}>Submit</button>
          </Col>
        </Row>

      </form>
    </Container>
    </Wrapper>
  );
}


export default FormOutdoors;

