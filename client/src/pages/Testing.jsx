import React, { Component }  from 'react';
import Wrapper from "../components/Wrapper";
import Ticketmaster from "../components/Ticketmaster"
import { Container, Row, Col } from "../components/Grid";

class Testing extends Component {


  render() {
    return (
      <Wrapper>
          <Ticketmaster />

      </Wrapper>
    );
  }
}

export default Testing;