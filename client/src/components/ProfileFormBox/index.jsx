import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom'
import "./style.css";



class ProfileFormBox extends Component {



  render() {
    return (
      <div id="cardBox" className="card">
        <h5 className="card-header">
          Vacation Builder
				</h5>
        <div className="card-body d-flex justify-content-around">
          <div>
            <Link to="/dayform"><button type="button" className="btn btn-secondary">Local</button></Link>
          </div>
          <div>
            <Link to="/vacationform"><button type="button" className="btn btn-secondary">Global</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFormBox;
