import React, { Component } from 'react';
import Nav from "../components/Nav";
import { Wrapper } from "../components/Styled";
import { withRouter } from 'react-router-dom';
import TripData from "../components/TripData";
import { SaveOutdoor } from "../components/Save";
import API from "../utils/API";
// import Outdoor from '../components/Outdoors';


class DayTrip extends Component {
  constructor(props) {
    super(props)
  }

  state={

  }

  componentDidMount() {
    // this.redirect()
    this.getVacationData();
  }

  redirect = () => {
    if (!this.props.state.tripName) {
      this.props.history.push("/dayform")
    }
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        console.log(res.data)
        console.log(res.data.tripName)
        this.setState({
          local: res.data.local,
          tripId: res.data._id,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart,
          city: res.data.city,
          state: res.data.state,
        })
      }).catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <Wrapper>
        <Nav
        local={this.state.local}
        vacaId={localStorage.getItem('vacaId')}
        />
        <TripData
          vacaId={localStorage.getItem('vacaId')}
        // tripName={this.state.tripName}
        // dateStart={this.state.dateStart}
        // city={this.state.city}
        // state={this.state.state}
        />
        <SaveOutdoor  
        />
      </Wrapper>
    );
  }
}

export default withRouter(DayTrip);