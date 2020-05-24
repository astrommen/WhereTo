import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {Title} from "../components/Styled";

class DayTrip extends Component {


  render() {
    return (
      <div>
        <Nav />
        <Title>Start Compiling your Day Trip</Title>
      </div>
    );
  }
}

export default DayTrip;