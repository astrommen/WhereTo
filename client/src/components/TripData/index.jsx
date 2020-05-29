import React, { Component } from "react";
import { Jumbo } from "../Styled";
import API from "../../utils/API";
import jwt_decode from "jwt-decode";
import { TripBtn2 } from "../Styled";
import { Link } from "react-router-dom";
var moment = require('moment');

//Add function for date display
//Add function to capitalize first letters of city, state

class template extends Component {
  constructor() {
    super()

    const token = (window.localStorage.getItem("jwtToken"));
    const decoded = jwt_decode(token);
    const user = decoded.id;

    this.state = {
      userId: user
    }
  }

  state = {

  }

  componentDidMount() {
    this.getVacationData()
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        console.log(res.data)
        console.log(res.data.tripName)
        let dateStart = moment(res.data.dateStart).format("dddd, MMMM Do YYYY")
        if (res.data.dateEnd) {
          var dateEnd = moment(res.data.dateEnd).format("dddd, MMMM Do YYYY")
        }

        this.setState({
          local: res.data.local,
          tripId: res.data._id,
          tripName: this.capitalize_Words(res.data.tripName),
          dateStart: dateStart,
          dateEnd: res.data.dateEnd ? dateEnd : '',
          city: this.capitalize_Words(res.data.city),
          state: res.data.state
        })
      }).catch(err => console.log(err))
  }

  capitalize_Words = (str) => {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  }

  deleteVacation = () => {
    API.deleteVacation(this.state.tripId)
      .then((data) => {
        console.log("VACA")
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  deleteUserVacaId = () => {
    API.deleteUserVacaId(this.state.userId, this.state.tripId)
      .then(data => {
        console.log("USER VACA ID")
        console.log(data)

      })
      .catch(err => console.log(err))
  }

  deleteStuff = () => {
    this.deleteUserVacaId()
    this.deleteVacation()
  }


  render() {
    return (
      <div>
        <Jumbo className="mt-5" id={this.state.tripId} local={this.state.local}>
          <h1 className="display-4">{this.state.tripName}</h1>
          <h4>{this.state.city}, {this.state.state}</h4>
          {!this.state.dateEnd ?
            <h5>{this.state.dateStart}</h5>
            :
            <h5>{this.state.dateStart} -> {this.state.dateEnd}</h5>
          }

          <Link to="/profile">
            <TripBtn2 type="button" className="btn btn-primary" onClick={this.deleteStuff} >Delete Vacation</TripBtn2></Link>


          <hr className="my-2" />
          <p>Use the Tabs above to add activities to your trip!</p>
        </Jumbo>
      </div>
    );
  }
}

export default template;
