import React, { Component }  from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import TicketmasterCard from "../TicketmasterCard"
import {Image, Wrapper} from "../Styled";

class Ticketmaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      distance: "50",
      loading: false,
      hasError: false
    }
  }

  componentDidMount() {
    console.log("ticketmaster", this.props.state)
    this.searchTickets(this.props.state.sports, this.props.state.concert, this.props.state.theatre, this.state.distance, this.props.state.dateStart, this.props.state.city);
  };

  searchTickets = (sports, concert, theatre, distance, state, dateStart, city) => {
    this.setState({loading: true})
    API.callTicketmasterD(sports, concert, theatre, distance, state, dateStart, city)
    .then(res => {
      this.setState({ events : res.data, loading: false})
    })
    .catch(err => this.setState({hasError: true, loading: false}));
  }

  saveEvent = (activity) => {
    console.log(activity)
    API.saveEvent(activity)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError && <h1>There was an error searching for your Request. Please try again later.</h1>}
        {this.state.events.length > 0 ? (
          this.state.events.map((activity) => 
          <TicketmasterCard
          key={activity.id} 
          id={activity.id}
            name={activity.name}
            url={activity.url}
            image={activity.image}
            localDate={activity.localDate}
            localStartTime={activity.localStartTime}
            priceMin={activity.price}
            // priceMax={activity.priceRangeMax}
            // currency={activity.currency}
            seatmapLink={activity.seatmapLink ? activity.seatmapLink.staticUrl : ""}
            venueName={activity.venueName}
            venueUrl={activity.venueUrl}
            venueCity={activity.venueCity}
            venueState={activity.venueState}
            venueStreet={activity.venueStreet}
            venuePostal={activity.venuePostal} 
              />)
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Wrapper>
    );
  }
}

export default Ticketmaster;
