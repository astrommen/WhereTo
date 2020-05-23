import React, { Component }  from 'react';
import Nav from "../components/Nav"
import {White} from "../components/Styled";

class Vacation extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <White>Start Compiling your Vaction</White>
      </div>
    );
  }
}

export default Vacation;