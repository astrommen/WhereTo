import React, { Component }  from 'react';
import FormDay from "../components/FormDay";
import Nav from "../components/Nav"

class DayTrip extends Component {


  render() {
    return (
      <div>
        <Nav />
        <FormDay />
      </div>
    );
  }
}

export default DayTrip;