import React, { Component }  from 'react';
import FormDay from "../components/FormDay";
import Yelp from '../components/Yelp';
import Nav from "../components/Nav"

class DayTrip extends Component {


  render() {
    return (
      <div>
        <Nav />
        <FormDay />
        <Yelp />
      </div>
    );
  }
}

export default DayTrip;