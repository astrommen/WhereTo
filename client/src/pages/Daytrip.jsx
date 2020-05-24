import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {Title, Wrapper} from "../components/Styled";

class DayTrip extends Component {


  render() {
    return (
      <Wrapper>
        <Nav />
        <Title>Start Compiling your Day Trip</Title>
      </Wrapper>
    );
  }
}

export default DayTrip;