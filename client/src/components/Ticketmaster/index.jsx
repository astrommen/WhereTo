import React, { Component } from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import NavVac from "../NavVac";
import TicketmasterCard from "../TicketmasterCard"
import FormEvents from "../FormEvents"
import { Image, Wrapper, Jumbo, White } from "../Styled";

class Ticketmaster extends Component {
  constructor(props) {
    super(props)

    let month = () => {
      let m = today.getMonth() + 1
      if (m < 10) {
        return "0" + m;
      } else {
        return m;
      }
    }

    let day = () => {
      let m = today.getDate()
      if (m < 10) {
        return "0" + m;
      } else {
        return m;
      }
    }

    var today = new Date(), 
    dateFill = today.getFullYear() + '-' + (month()) + '-' + day()

    this.state = {
      events: [],
      distance: "50",
      date: dateFill,
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
    // console.log("ticketmaster", this.props.state)
    this.getVacationData()
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        // console.log(res.data)
        // console.log(res.data.tripName)
        this.setState({
          local: res.data.local,
          tripId: res.data._id,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart.slice(0, 19) + "Z",
          city: res.data.city,
          state: res.data.state
        })
      }).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    if (event.target.type === "checkbox") {
      if (!this.state[name]) {
        console.log("check")
        this.setState({
          [name]: value
        });
      } else {
        console.log("uncheck")
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
    // console.log(
    //   "family: ", this.state.family,
    //   "\n film: ", this.state.film,
    //   "\n theatre: ", this.state.theatre,
    //   "\n concert: ", this.state.concert,
    //   "\n sports: ", this.state.sports,
    //   "\n distance: ", this.state.distance,
    //   "\n sports: ", this.props.state.dateStart,
    //   "\n city:", this.props.state.city,
    //   "\n film: ", this.state.film,
    //   "\n family: ", this.state.family,
    // )

    this.searchTickets(
      this.state.sports,
      this.state.concert,
      this.state.theatre,
      this.state.distance,
      this.state.state,
      this.state.dateStart,
      this.state.city,
      this.state.film,
      this.state.family);
  }

  searchTickets = (sports, concert, theatre, distance, state, dateStart, city, film, family) => {
    // this.setState({ loading: true })
    API.callTicketmasterD(sports, concert, theatre, distance, state, dateStart, city, film, family)
      .then(res => {
        this.setState({ events: res.data, loading: false })
      })
      .catch(err => this.setState({ hasError: true, loading: false }));
  }



  render() {
    // console.log(this.state)
    return (
      <Wrapper>
      {this.state.local ? 
        <Nav 
        dateStart={this.state.dateStart}
        vacaId={localStorage.getItem('vacaId')}
        /> :
        <NavVac
        dateEnd={this.state.dateEnd}
        vacaId={localStorage.getItem('vacaId')} />
      }

      <Jumbo local={this.state.local}>
        <FormEvents
        value={this.state.value}
        local={this.state.local} 
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
      </Jumbo> 
        
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError &&
          <Jumbo local={this.state.local}>
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
              longitude={activity.longitude}
              latitude={activity.latitude}
            />)
        ) : (
            <Jumbo local={this.state.local}>
              <h3>No Results to Display</h3>
              <White center>Select which events you are interested in to populate your options.</White>
            </Jumbo>
          )}
      </Wrapper>
    );
  }
}

export default Ticketmaster;
