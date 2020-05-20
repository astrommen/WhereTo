import React, { Component } from "react";
import YelpCard from "../YelpCard";
import API from "../../utils/API";
import "./style.css";
import Nav from "../Nav";
const axios = require("axios");

class Yelp extends Component {
  state={
    eateries: [],
    location: "NYC",
    meal: "breakfast_brunch"
  }

  componentDidMount(){
    this.searchFood(this.state.location, this.state.meal)
  }

  // searchFood = (location, meal) => {
  //   API.callYelp(location, meal)
  //   .then(res => {
  //     console.log(res);
  //     this.setState({ eateries : res.data})
  //     console.log(this.state.eateris)
  //   })
  //   .catch(err => console.log(err));
  // }

  searchFood = (location, meal) => {
  const config = {
    headers: {
      'Authorization': `Bearer wOVQkre9W01lZIZy7IrkwUqyLlBieuCZ623n9TLVFb3m6_DLo4zuOP0rkvFyyZGOjymiYtqqO4F-ej7lTmasoSvP5FrEYKDsun9zhiiLwxqDqtBqFhNWH1pAGfE-XnYx`,
      "dataType": 'jsonp',
      "Access-Control-Allow-Origin": "*",
    }
    ,
    params: {
      term: meal,
      location: location
    }
  };
      axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
        .then(results => {
          const busArray = []
          for (var i=0; i <results.data.businesses.length; i++) {
            busArray.push(
              {
                id: results.data.businesses[i].id,
                name: results.data.businesses[i].name,
                image: results.data.businesses[i].image_url,
                phone: results.data.businesses[i].display_phone,
                street: results.data.businesses[i].location.address1,
                city: results.data.businesses[i].location.city,
                state: results.data.businesses[i].location.state,
                zip: results.data.businesses[i].location.zip_code,
                rating: results.data.businesses[i].rating,
                reviews: results.data.businesses[i].review_count,
                link: results.data.businesses[i].url,
                latitude: results.data.businesses[i].coordinates.latitude,
                longitude: results.data.businesses[i].coordinates.longitude
              })
          }
          this.setState({ eateries: busArray});
          // console.log(this.state.eateries)
        })
        .catch((error) => console.log(error.response));;
    }




  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //handleFormSubmit

  saveEatery = (eatery) => {
    API.saveEatery(eatery)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Nav />
        {this.state.eateries.length > 0 ? (
          this.state.eateries.map((eatery) => 
          <YelpCard 
          key={eatery.id}
          name={eatery.name}
          image={eatery.image}
          phone={eatery.phone}
          street={eatery.street}
          city={eatery.city}
          state={eatery.state}
          zip={eatery.zip}
          link={eatery.link}
          rating={eatery.rating}
          reviews={eatery.reviews}
          latitude = {eatery.latitude}
          longitude = {eatery.longitude}
            /> ) 
        ): (
        <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Yelp;
