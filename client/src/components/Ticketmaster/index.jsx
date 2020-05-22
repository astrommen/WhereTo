import React, { Component }  from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import TicketmasterCard from "../TicketmasterCard"

class Ticketmaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      activity: "sports",
      distance: "50",
      dateStart: "2020-05-01",
      dateEnd: "2020-08-30",
      city: "Philadelphia"
    }
  }


  componentDidMount() {
    this.searchTickets(this.state.activity, this.state.distance, this.state.dateStart, this.state.dateEnd, this.state.city);
    console.log("ticketmaster", this.props.state)
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
        <Nav />
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
      </div>
    );
  }
}

export default Ticketmaster;
