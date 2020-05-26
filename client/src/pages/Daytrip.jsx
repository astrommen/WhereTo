import React, { Component } from 'react';
import Nav from "../components/Nav"
import { Title, Wrapper } from "../components/Styled";
import { withRouter } from 'react-router-dom'
import TripData from "../components/TripData";


class DayTrip extends Component {
  constructor(props) {
    super(props)

  }

  state = this.props.state

  componentDidMount() {
    // this.redirect()
  }

  redirect = () => {
    if (!this.props.state.tripName) {
      this.props.history.push("/dayform")
    }
  }

  render() {
    return (
      <Wrapper>
        <Nav
          vacaId={localStorage.getItem('vacaId')}
        />
        <TripData
          vacaId={localStorage.getItem('vacaId')}
        // tripName={this.state.tripName}
        // dateStart={this.state.dateStart}
        // city={this.state.city}
        // state={this.state.state}
        // boating=""
        // fishing=""
        // hiking=""
        // beach=""
        // concert=""
        // sports=""
        // theatre=""
        // sightseeing=""
        // breakfast=""
        // dinner=""
        // dessert=""
        // drinks=""
        // foodType=""
        />
      </Wrapper>
    );
  }
}

export default withRouter(DayTrip);