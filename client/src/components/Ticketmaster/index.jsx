import React, { Component } from "react";
import {Col, Row, Container} from "../Grid";
import API from "../../../utils/API"
import "./style.css";

class Ticketmaster extends Component {

  state = {
    activities: [],
    activity: "",
    distance: "",
    dateStart: "",
    dateEnd: "",
    city: ""
  }

  componentDidMount() {
    this.searchTickets();
  };

  searchTickets = query => {
    API.callTicketmaster(query)
    .then(res => {
      const ticketsArray = []
      for (var i=0; i < res.data._embedded.events.length; i++) {
        ticketsArray.push (
          { id: res.data._embedded.events[i].id,
            name: res.data._embedded.events[i].name,
            url: res.data._embedded.events[i].url,
            image: res.data._embedded.events[i].images[0].url,
            localDate: res.data._embedded.events[i].dates.start.localdate,
            localTime: res.data._embedded.events[i].dates.start.localTime,
            priceRange: res.data._embedded.events[i].priceRanges[0].min,
            priceRange: res.data._embedded.events[i].priceRanges[0].max,
            seatmapLink: res.data._embedded.events[i].seatmap.staticUrl,
            venue: res.data._embedded.events[i]._embedded.venues[0].name,
            venueUrl: res.data._embedded.events[i]._embedded.venues[0].url,
            venueCity: res.data._embedded.events[i]._embedded.venues[0].city.name,
            venueState: res.data._embedded.events[i]._embedded.venues[0].state.name,
            venueStreet: res.data._embedded.events[i]._embedded.venues[0].address.line1,
            venuePostal: res.data._embedded.events[i]._embedded.venues[0].postalCode
          })

      }
    })
  }






  render() {
    return (
      <div></div>
    );
  }
}

export default Ticketmaster;
