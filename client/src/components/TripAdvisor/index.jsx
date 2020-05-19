import React, { Component } from "react";
import TripCard from "../TripCard";
import API from "../../utils/API";
import Nav from "../Nav";
import "./style.css";
const axios = require("axios");

class TripAdvisor extends Component {

  state={
    trips: [],
    locationInfo: [],
    location: "NYC"
  }

  componentDidMount(){
    this.searchTrips(this.state.location)
  }

  searchTrips = location => {
    axios({
      "method": "GET",
      "url": "https://tripadvisor1.p.rapidapi.com/locations/search",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "6b697f762dmshbcdbf3f766fb40ep17a99bjsnd9fed17f88a1",
        "useQueryString": true
      }, "params": {
        "location_id": "1",
        "limit": "30",
        "sort": "relevance",
        "offset": "0",
        "lang": "en_US",
        "currency": "USD",
        "units": "mi",
        "query": location
      }
    })
      .then((results) => {
        const infoArray =[]
        infoArray.push({
          location_id: results.data.data[0].result_object.location_id,
          name: results.data.data[0].result_object.location_string,
          latitude: results.data.data[0].result_object.latitude,
          longitude: results.data.data[0].result_object.longitude
        })
        this.setState({ locationInfo : infoArray})
        console.log(this.state.locationInfo)
      })
      .catch((error) => {
        console.log(error)
      })
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

  saveTrip = (trip) => {
    console.log(trip)
    API.saveTrip(trip)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <Nav />
      {this.state.trips.length > 0 ? (
        this.state.trips.map((trip) =>
        <TripCard 
        // key={trip.id}
        />
        ) 
      ) : (
      <h3>No Results to Display</h3>
      )}  
    </div>
        );
      }
    }

export default TripAdvisor;
