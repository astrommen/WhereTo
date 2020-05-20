import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import WalkCard from "../WalkCard"
import "./style.css";

class Walk extends Component {
  state = {
    walk: [],
    city: "Paris"
  }

  componentDidMount() {
    this.searchTour(this.state.city)
  };

  searchTour = city => {
    console.log("here")
    API.callTour(city)
    .then(res => {
      // console.log(res);
      this.setState({ walk : res.data})
      // console.log(this.state.walk)
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
      this.searchBooks(this.state.search);
  };

  saveWalk = (walk) => {
    API.saveWalk(walk)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <Nav />
        {this.state.walk ? (
          <WalkCard
          walkTime={this.state.walk.walkTime}
          distance={this.state.walk.distance}
          stops={this.state.walk.stops}
          />
        ) : <h3>No Results to Display</h3>}
      </div>
    );
  }
}

export default Walk;
