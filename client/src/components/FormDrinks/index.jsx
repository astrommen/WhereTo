import React from "react";
import {Label, Wrapper, Image} from "../Styled";
import {Container, Row, Col} from "../Grid";
import "./style.css";


function FormDrinks(props) {
  return (
    <Wrapper>
      <Container>
      <form className="mt-4" >
      
        <Row className="text-center">
          <Col size="md-1">
            <Image className="img-fluid" alt="drinks" src="./img/activities/bar.png" />
          </Col>

          <Col size="md-5" className="form-group">
            <Label htmlFor="inputDrinks">Type of Drinks:</Label>
            <select id="inputDrinks"
              name="drinks"
              value={props.value}
              onChange={props.handleInputChange} className="form-control">
              <option defaultValue>Choose...</option>
              <option value="beer_and_wine">Beer, Wine, and Spirits</option>
              <option value="beertours">Beer Tours</option>
              <option value="breweries">Brewery</option>
              <option value="coffee">Coffee and Tea</option>
              <option value="cideries">Cidery</option>
              <option value="distilleries">Distillery</option>
              <option value="wineries">Winery</option>
              <option value="winetours">Wine Tours</option>
            </select>
          </Col>
          <Col size="md-3">
            <button type="Submit" onClick={props.handleFormSubmit}>Submit</button>
          </Col>
          </Row>

      </form>
    </Container>
    </Wrapper>
  );
}


export default FormDrinks;

