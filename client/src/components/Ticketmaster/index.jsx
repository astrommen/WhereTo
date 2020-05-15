import React, { Component } from "react";
import API from "../../../utils/API"
import "./style.css";

class Ticketmaster extends Component {

  state = {
    events: [],
    activity: "",
    distance: "",
    dateStart: "",
    dateEnd: "",
    city: ""
  }

  componentDidMount() {
    this.searchTickets();
  };

  searchTickets = activity => {
    API.callTicketmaster(activity)
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
  }






  render() {
    return (
      <div>
        {this.state.events.length > 0 ? (
          this.state.events.map((event) => 
          <EventsCard 
          id={event.id}
            name={event.name}
            url={event.url}
            image={event.image}
            localDate={event.localdate}
            localStartTime={event.localStartTime}
            priceMin={event.priceRangeMin}
            priceMax={event.priceRangeMax}
            seatmapLink={event.seatmapLink}
            venueName={event.venueName}
            venueUrl={event.venueUrl}
            venueCity={event.venueCity}
            venueState={event.venueState}
            venueStreet={event.venueStreet}
            venuePostal={event.venuePostal} 
              />)
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Ticketmaster;
