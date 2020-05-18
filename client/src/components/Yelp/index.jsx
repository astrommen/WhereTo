import React, { Component } from "react";
import YelpCard from "../YelpCard";
import API from "../../utils/API";
import "./style.css";
import Nav from "../Nav";
import { SiteBtn } from "../Buttons";

class Yelp extends Component {
  state={
    eateries: [],
    location: "NYC",
    meal: "food"
  }

  componentDidMount(){
    this.searchFood(this.state.location, this.state.meal)
  }

  searchFood = (location, meal) => {
    API.callYelp(location, meal)
    .then(res => {
      console.log(res);
      this.setState({ eateries : res.data})
      console.log(this.state.eateris)
    })
    .catch(err => console.log(err));
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
