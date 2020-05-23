import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import TripCard from "../TripCard";
import {Image, Title} from "../Styled";
const axios = require("axios");

class TripAdvisor extends Component {
  constructor(props) {
    super(props)
    this.state={
      trips: [],
      locationInfo: [],
      loading: false,
      hasError: false
    }

  }


  componentDidMount(){
    this.searchTripId(this.props.state.state, this.props.state.city, this.props.state.sightseeing)
    console.log('tripAdvisor', this.props.state)
  }

  // searchTripId = (location, activity) => {
  //   API.callTrip(location, activity)
  //   .then(res => {
  //     console.log(res);
  //     this.setState({trips: res.data})
  //     console.log(this.state.trips)
  //   })
  // }

  searchTripId = (state, city, sightseeing) => {
    this.setState({loading: true})
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
        "limit": "10",
        "sort": "relevance",
        "offset": "0",
        "lang": "en_US",
        "currency": "USD",
        "units": "mi",
        "query": city+","+state
      }
    })
      .then((res) => {
        const infoArray =[]
        infoArray.push({
          location_id: res.data.data[0].result_object.location_id,
          name: res.data.data[0].result_object.location_string,
          latitude: res.data.data[0].result_object.latitude,
          longitude: res.data.data[0].result_object.longitude
        })
        this.setState({ locationInfo : infoArray})
        axios({
            "method":"GET",
            "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key":"f0f3546714msh866e3df1e2e1ce6p1f73f0jsnec17c00739e3",
            "useQueryString":true
            },"params":{
            "lang":"en_US",
            "currency":"USD",
            "sort":"recommended",
            "limit": "10",
            "lunit":"mi",
            "min_rating":"4",
            "bookable_first":"false",
            "subcategory": sightseeing,
            "location_id": res.data.data[0].result_object.location_id
            }
            })
            .then((results)=> {
              const tripsArray = []
              for (var i=0; i<results.data.data.length; i++) {
                tripsArray.push({
                  id: results.data.data[i].location_id,
                  address: results.data.data[i].address,
                  description: results.data.data[i].description,
                  latitude: results.data.data[i].latitude,
                  longitude: results.data.data[i].longitude,
                  name: results.data.data[i].name,
                  phone: results.data.data[i].phone,
                  openNow: results.data.data[i].open_now_text,
                  image: results.data.data[i].photo ? results.data.data[i].photo.images.medium.url : "./img/location/noImage.png",
                  rank: results.data.data[i].ranking,
                  website: results.data.data[i].website
                })
              }
              this.setState({ trips : tripsArray, loading: false});
              console.log(this.state.trips)
            })
            .catch((error)=>{
              console.log(error)
            })
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
      {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError && <Title>There was an error searching for your Request. Please try again later.</Title>}
      {this.state.trips.length > 0 ? (
        this.state.trips.map((trip) =>
        <TripCard 
        key={trip.id}
        address={trip.address}
        description={trip.description}
        latitude={trip.latitude}
        longitude={trip.longitude}
        name={trip.name}
        phone={trip.phone}
        openNow={trip.openNow}
        rank={trip.rank}
        website={trip.website}
        image={trip.image}
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
