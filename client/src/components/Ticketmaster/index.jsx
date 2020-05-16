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
    this.searchTickets(this.state.activity, this.state.distance, this.state.dateStart, this.state.city);
  };

  searchTickets = (activity, distance, state, dateStart) => {
    API.callTicketmaster(activity, distance, state, dateStart)
    .then(res => {
      const ticketsArray = []
      for (var i=0; i < res.data._embedded.events.length; i++) {
        ticketsArray.push (
          { id: res.data._embedded.events[i].id,
            name: res.data._embedded.events[i].name,
            url: res.data._embedded.events[i].url,
            image: res.data._embedded.events[i].images[0].url,
            localDate: res.data._embedded.events[i].dates.start.localdate,
            localStartTime: res.data._embedded.events[i].dates.start.localTime,
            priceRangeMin: res.data._embedded.events[i].priceRanges[0].min,
            priceRangeMax: res.data._embedded.events[i].priceRanges[0].max,
            currency: res.data._embedded.events[i].priceRanges[0].currency,
            seatmapLink: res.data._embedded.events[i].seatmap.staticUrl,
            venueName: res.data._embedded.events[i]._embedded.venues[0].name,
            venueUrl: res.data._embedded.events[i]._embedded.venues[0].url,
            venueCity: res.data._embedded.events[i]._embedded.venues[0].city.name,
            venueState: res.data._embedded.events[i]._embedded.venues[0].state.name,
            venueStreet: res.data._embedded.events[i]._embedded.venues[0].address.line1,
            venuePostal: res.data._embedded.events[i]._embedded.venues[0].postalCode
        })
      }
      this.setState({ events: ticketsArray })
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
