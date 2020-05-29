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
import SaveSightseeing from "../components/SaveSightseeing";
import { concatSeries } from 'async';
// import Outdoor from '../components/Outdoors';


class DayTrip extends Component {
  constructor(props) {
    super(props)
  }

  state = {

  }

  componentDidMount() {
    this.getVacationData();
  }

  redirect = () => {
    if (!this.props.state.tripName) {
      this.props.history.push("/dayform")
    }
  }

  getVacationData = () => {
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
          food: res.data.food,
          outdoors: res.data.outdoors,
          sightseeing: res.data.sightseeing
        })
      }).catch(err => console.log(err))
  }


  deleteFood = id => {
    API.deleteFood(localStorage.getItem('vacaId'), id)
      .then(res => this.setState({ food: res.data.food }))
      .catch(err => console.log(err))
  }

  deleteEvent = id => {
    API.deleteEvent(localStorage.getItem('vacaId'), id)
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err))
  }

  deleteOutdoor = id => {
    API.deleteOutdoor(localStorage.getItem('vacaId'), id)
    .then(res => this.setState({ outdoors: res.data.outdoors }))
    .catch(err => console.log(err))
  }

  deleteSightseeing = id => {
    API.deleteSightseeing(localStorage.getItem('vacaId'), id)
    .then(res => this.setState({ sightseeing: res.data.sightseeing }))
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
          
          {this.state.outdoors && this.state.outdoors.map(outdoor =>
            <SaveOutdoor 
            key={outdoor.id}
            id={outdoor.id}
            name={outdoor.name}
            description={outdoor.description}
            directions={outdoor.directions}
            longitude={outdoor.longitude}
            latitude={outdoor.latitude}
            street={outdoor.street}
            city={outdoor.city}
            postalCode={outdoor.postalCode}
            state={outdoor.state}
            link={outdoor.link}
            images={outdoor.images}
            activities={outdoor.activities}
            deleteOutdoor={this.deleteOutdoor}
              />
            )}

          {this.state.sightseeing && this.state.sightseeing.map(sightsee =>
            <SaveSightseeing
            key={sightsee.id}
            id={sightsee.id}
            address={sightsee.address}
            description={sightsee.description}
            latitude={sightsee.latitude}
            longitude={sightsee.longitude}
            name={sightsee.name}
            phone={sightsee.phone}
            openNow={sightsee.openNow}
            rank={sightsee.rank}
            website={sightsee.website}
            image={sightsee.image}
            deleteSightseeing={this.deleteSightseeing}
          />)}

        </CardDeck>

      </Wrapper>
    );
  }
}

export default withRouter(DayTrip);