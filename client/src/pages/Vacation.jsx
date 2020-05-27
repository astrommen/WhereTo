import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {Title, Wrapper} from "../components/Styled";

class Vacation extends Component {

  render() {
    return (
      <Wrapper>
        <Nav/>
        <Title>Start Compiling your Vaction</Title>
      </Wrapper>
    );
  }
}

export default Vacation;