import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom'
import {Container, Row, Col} from "../Grid";
import { TripBtn, Title, White } from "../Styled";
import "./style.css";



class ProfileFormBox extends Component {

  render() {
    return (
      <div className="mb-3">
        <Title className="card-header">
          Trip Builder
				</Title>
        <White>What type of trip are you planning?</White>
        <div className="card-body d-flex justify-content-around">
          <div>
            <Link to="/dayform"><TripBtn type="button" className="btn btn-secondary">Daytrip</TripBtn></Link>
          </div>
          <div>
            <Link to="/vacationform"><TripBtn type="button" className="btn btn-secondary" vacation>Vacation</TripBtn></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFormBox;
