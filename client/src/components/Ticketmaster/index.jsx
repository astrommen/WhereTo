import React, { Component } from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import TicketmasterCard from "../TicketmasterCard"
import FormEvents from "../FormEvents"
import {Image, Wrapper} from "../Styled";

class Ticketmaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      distance: "50",
      loading: false,
      hasError: false,
      concert: "",
      sports: "",
      theatre: "",
      film: "",
      family: ""
    }
  }

  componentDidMount() {
    console.log("ticketmaster", this.props.state)
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    
    if (event.target.type === "checkbox") {
      if (!this.state[name]) {
        console.log("check")
        this.setState({
          [name]: value
        });
      } else {
        console.log("check")
        this.setState({
          [name]: ''
        });
      }
    } else {
      this.setState({
        [name]: value
      });
      console.log(this.state.foodType)
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); 
    console.log("family: ", this.state.family + "\n film: ", this.state.film, "\n theatre: " , this.state.theatre, "\n concert: ", this.state.concert,  "\n sports: ", this.state.sports);
    this.searchTickets(this.state.sports, this.state.concert, this.state.theatre, this.state.distance, this.props.state.dateStart, this.props.state.city, this.state.film, this.state.family);
  }

  searchTickets = (sports, concert, theatre, distance, state, dateStart, city, film, family) => {
    this.setState({loading: true})
    API.callTicketmasterD(sports, concert, theatre, distance, state, dateStart, city, film, family)
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
    // console.log(this.state)
    return (
      <Wrapper>
        <Nav />
        <FormEvents 
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
        
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError &&
          <Jumbo>
            <h5>There was an error searching for your Request.</h5>
            <White>Please try a different selection or attempt again later.</White>
          </Jumbo>}
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
            <Jumbo>
              <h3>No Results to Display</h3>
              <White>Use the food and drink forms to populate your options.</White>
            </Jumbo>
          )}
      </Wrapper>
    );
  }
}

export default Ticketmaster;
