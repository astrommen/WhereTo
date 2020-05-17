import React, { Component }  from 'react';
import CountryInfo from '../components/CountryInfo';
// import DayPlanner from '../components/DayPlanner';
import Outdoors from "../components/Outdoors";
import Ticketmaster from "../components/Ticketmaster"
import Yelp from "../components/Yelp"
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav"

class Testing extends Component {


  render() {
    return (
      <div>
        <Nav />
          {/* <CountryInfo />
          <DayPlanner />
          <Outdoors />
          <Ticketmaster />
          <Yelp /> */}
      </div>
    );
  }
}

export default Testing;