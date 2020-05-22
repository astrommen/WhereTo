import React, { Component } from "react";
import YelpCard from "../YelpCard";
import API from "../../utils/API";
import Nav from "../Nav";

class Yelp extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      eateries: [],
      breakfast: "",
      city: "",
      state: "",
      // location: "NYC",
      // meal: "breakfast_brunch"
    }
  }

  componentDidMount(){
    console.log("yelp date " , this.props.state.breakfast)
    this.searchFood(this.props.state.state, this.props.state.city, this.props.state.breakfast)
  }

  searchFood = (state, city, breakfast) => {
    console.log("state", state)
    API.callYelp(state, city, breakfast)
    .then(res => {
      // console.log(res);
      this.setState({ eateries : res.data})
      // console.log(this.state.eateries)
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
          latitude={eatery.latitude}
          longitude={eatery.longitude}
            /> ) 
        ): (
        <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Yelp;
