import React, { Component }  from 'react';
import Wrapper from "../components/Wrapper";
import Yelp from "../components/Yelp"
import { Container, Row, Col } from "../components/Grid";

class Testing extends Component {


  render() {
    return (
      <Wrapper>
          <Yelp />

      </Wrapper>
    );
  }
}

export default Testing;