import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import {Wrapper, Title, Image} from "../Styled";
import WalkCard from "../WalkCard"

class Walk extends Component {
  state = {
    walk: [],
    city: "Paris",
    loading: false,
    hasError: false
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
    .catch(err => this.setState({hasError: true, loading: false}));
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
      <Wrapper>
        <Nav />
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError && <Title>There was an error searching for your Request. Please try again later.</Title>}
        {this.state.walk ? (
          <WalkCard
          walkTime={this.state.walk.walkTime}
          distance={this.state.walk.distance}
          stops={this.state.walk.stops}
          />
        ) : <h3>No Results to Display</h3>}
      </Wrapper>
    );
  }
}

export default Walk;
