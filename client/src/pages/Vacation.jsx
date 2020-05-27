import React, { Component } from 'react';
import Nav from "../components/Nav";
import { Wrapper } from "../components/Styled";
import { withRouter } from 'react-router-dom';
import TripData from "../components/TripData";
import API from "../utils/API";


class Vacation extends Component {
  constructor(props) {
    super(props)
  }

  state={

  }

  componentDidMount() {
    this.getVacationData();
  }

  redirect = () => {
    if (!this.props.state.tripName) {
      this.props.history.push("/vacationform")
    }
  }

  getVacationData = () => {
    API.getVacations(localStorage.getItem('vacaId'))
    .then((res) => {
      console.log("API getVacations function Vacations Page", res.data)
      console.log("Trip Name: ", res.data.tripName)
      this.setState({
        local: res.data.local,
        tripId: res.data._id,
        tripName: res.data.tripName,
        dateStart: res.data.dateStart,
        dateEnd: res.data.dateEnd,
        city: res.data.city,
        state: res.data.state,
      })
    }).catch(err => console.log(err))
  }

  render() {
    console.log("Vacation render: ", this.state)
    return (
      <Wrapper>
        <Nav 
        local={this.state.local}
        vacaId={localStorage.getItem('vacaId')}
        />
        <TripData
        vacaId={localStorage.getItem('vacaId')}
        />
        
      </Wrapper>
    );
  }
}

export default withRouter(Vacation)
