import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {Title} from "../components/Styled";

class Vacation extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Title>Start Compiling your Vaction</Title>
      </div>
    );
  }
}

export default Vacation;