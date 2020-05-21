import React, { Component } from "react";
import "./style.css";

class VacationBtn extends Component {




  render() {
    return (
      this.props.local ? (
        <div>
          <button type="button" className="btn btn-primary btn-block">{this.props.name}</button>
        </div>
      ) : (
          <div>
            <button type="button" className="btn btn-success btn-block">{this.props.name}</button>
          </div>
        )

    );
  }
}




export default VacationBtn;
