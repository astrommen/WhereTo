import React from "react";
import { Label, Wrapper, Image, Submit } from "../Styled";
import { Container, Row, Col } from "../Grid";
import "./style.css";


function FormDrinks(props) {
  return (
    <Wrapper>
      <Container>
        <form className="mt-4" >
          <Row className="text-center">
            <Col size="md-2">
              <img className="img-fluid" alt="drinks" src={process.env.PUBLIC_URL + "./img/activities/bar.png"} />
            </Col>
            <div className="form-group col-md-5 mt-3">
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
            </div>
            <div className="col-md-2 my-auto">
              <Submit type="Submit" onClick={props.handleFormSubmit} local={props.local}><i className="fas fa-glass-whiskey"></i> Submit</Submit>
            </div>
          </Row>

        </form>
      </Container>
    </Wrapper>
  );
}


export default FormDrinks;

