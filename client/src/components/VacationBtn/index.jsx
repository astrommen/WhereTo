import React, { Component } from "react";
import {Link} from "react-router-dom";
import { TripBtn2 } from "../Styled";


class VacationBtn extends Component {

  redirectVacation = () => {
    console.log("made it to redirect")
    localStorage.setItem('vacaId', this.props.id);
  }



  render() {
    return (
      this.props.local ? (
        <div>
            <Link to="/daytrip">
          <TripBtn2 id={this.props.id} type="button" className="btn btn-primary btn-block" onClick={this.redirectVacation} >{this.props.name}</TripBtn2></Link>
        </div>
      ) : (
          <div>
            <Link to="/vacation">
            <TripBtn2 id={this.props.id} type="button" className="btn btn-success btn-block" onClick={this.redirectVacation} vacation>{this.props.name}</TripBtn2></Link>
          </div>
        )

    );
  }
}




export default VacationBtn;
