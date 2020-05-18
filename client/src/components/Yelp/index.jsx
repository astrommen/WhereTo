import React, { Component } from "react";
import YelpCard from "../YelpCard";
import API from "../../utils/API";
import "./style.css";
import Nav from "../Nav";
import { SiteBtn } from "../Buttons";
const axios = require("axios");

class Yelp extends Component {
  state={
    eateries: [],
    location: "Philadelphia",
    meal: "beer_and_wine"
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
        .then(results => console.log(results.data.businesses))
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
          // key={eatery.id}
            /> ) 
        ): (
        <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Yelp;
