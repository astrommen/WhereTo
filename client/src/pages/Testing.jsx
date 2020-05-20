import React, { Component }  from 'react';
import CountryInfo from '../components/CountryInfo';
import Nav from "../components/Nav"

class Testing extends Component {


  render() {
    return (
      <div>
        <Nav />
          <CountryInfo />
      </div>
    );
  }
}

export default Testing;