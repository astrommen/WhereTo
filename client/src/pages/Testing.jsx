import React, { Component }  from 'react';
import Wrapper from "../components/Wrapper";
import DayPlanner from "../components/DayPlanner"
import { Container, Row, Col } from "../components/Grid";

class Testing extends Component {


  render() {
    return (
      <Wrapper>
          <DayPlanner />

      </Wrapper>
    );
  }
}

export default Testing;