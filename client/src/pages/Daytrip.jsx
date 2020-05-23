import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {White} from "../components/Styled";

class DayTrip extends Component {


  render() {
    return (
      <div>
        <Nav />
        <White>Start Compiling your Day Trip</White>
      </div>
    );
  }
}

export default DayTrip;