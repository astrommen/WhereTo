import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./style.css";


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
          <button id={this.props.id} type="button" className="btn btn-primary btn-block" onClick={this.redirectVacation} >{this.props.name}</button></Link>
        </div>
      ) : (
          <div>
            <Link to="/vacation">
            <button id={this.props.id} type="button" className="btn btn-success btn-block" onClick={this.redirectVacation} >{this.props.name}</button></Link>
          </div>
        )

    );
  }
}




export default VacationBtn;
