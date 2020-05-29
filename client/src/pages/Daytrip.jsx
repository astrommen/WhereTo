import React, { Component } from 'react';
import Nav from "../components/Nav";
import { Wrapper } from "../components/Styled";
import { withRouter } from 'react-router-dom';
import TripData from "../components/TripData";
import SaveOutdoor from "../components/SaveOutdoor";
import SaveEvents from "../components/SaveEvents";
import SaveFood from "../components/SaveFood";
import { CardDeck } from 'react-bootstrap';
import API from "../utils/API";
import { concatSeries } from 'async';
// import Outdoor from '../components/Outdoors';


class DayTrip extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }

  componentDidMount() {
    // this.redirect()
    this.getVacationData();
    // this.returnEvent();
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
        // console.log(res.data)
        // console.log("info", res.data.events)
        this.setState({
          local: res.data.local,
          tripId: res.data._id,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart,
          city: res.data.city,
          state: res.data.state,
          events: res.data.events,
          food: res.data.food
        })
      }).catch(err => console.log(err))
  }


  deleteFood = id => {
    // console.log("id: ", id)
    API.deleteFood(localStorage.getItem('vacaId'), id)
      // .then(res => console.log(res))
      .then(res => this.setState({ food: res.data.food }))
      .catch(err => console.log(err))
  }


  deleteEvent = id => {
    // console.log("id: ", id)
    API.deleteEvent(localStorage.getItem('vacaId'), id)
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Nav
          local={this.state.local}
          vacaId={localStorage.getItem('vacaId')}
        />

        <TripData
          vacaId={localStorage.getItem('vacaId')}
        />

        <CardDeck>
        {this.state.events && this.state.events.map(event => 
          <SaveEvents 
          key={event.id}
          id={event.id}
          name={event.name}will 
          url={event.url}
          image={event.image}
          localdate={event.localdate}
          localStartTime={event.localStartTime}
          seatmapLink={event.seatmapLink}
          venueName={event.venueName}
          venueCity={event.venueCity}
          venueState={event.venueState}
          venueStreet={event.venueStreet}
          venuePostal={event.venuePostal}
          deleteEvent={this.deleteEvent}
          />)}
          {this.state.food && this.state.food.map(fd =>
            <SaveFood 
            key={fd.id}
            id={fd.id}
            name={fd.name}
            image={fd.image}
            phone={fd.phone}
            street={fd.street}
            city={fd.city}
            state={fd.state}
            zip={fd.zip}
            link={fd.link}
            rating={fd.rating}
            reviews={fd.reviews}
            latitude={fd.latitude}
            longitude={fd.longitude}
            transactions={fd.transactions}
            deleteFood={this.deleteFood}
            />)}

        </CardDeck>


        <SaveOutdoor />
      </Wrapper>
    );
  }
}

export default withRouter(DayTrip);