import React, { Component } from "react";
import "./style.css";

class VacationBtn extends Component {
  render() {
    return (
      <button type="button" className="btn btn-primary btn-block">{this.props.name}</button>
    );
  }
}

// function VacationBtn({ name }) {
//   return (
//     <button type="button" className="btn btn-primary">{name}</button>
//   )
// }


export default VacationBtn;
