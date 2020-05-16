import React, { Component }  from 'react';
import API from "../../utils/API";
import TicketmasterCard from "../TicketmasterCard"
import "./style.css";

class Ticketmaster extends Component {

  state = {
    events: [],
    activity: "concert",
    distance: "10",
    dateStart: "2019-06-03",
    dateEnd: "2019-06-06",
    city: "Baltimore"
  }

  componentDidMount() {
    this.searchTickets(this.state.activity, this.state.distance, this.state.dateStart, this.state.dateEnd, this.state.city);
  };

  searchTickets = (activity, distance, state, dateStart, dateEnd, city) => {
    API.callTicketmaster(activity, distance, state, dateStart, dateEnd, city)
    .then(res => {
      console.log(res);
      this.setState({ events : res.data})
      console.log(this.state.events)
    })
    .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      this.searchEvents(this.state.search);
  };

  saveEvent = (activity) => {
    console.log(activity)
    API.saveEvent(activity)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div>
        {this.state.events.length > 0 ? (
          this.state.events.map((activity) => 
          <TicketmasterCard
          key={activity.id} 
          id={activity.id}
            name={activity.name}
            url={activity.url}
            image={activity.image}
            localDate={activity.localdate}
            localStartTime={activity.localStartTime}
            priceMin={activity.priceRangeMin}
            priceMax={activity.priceRangeMax}
            currency={activity.currency}
            seatmapLink={activity.seatmapLink}
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
      </div>
    );
  }
}

export default Ticketmaster;
