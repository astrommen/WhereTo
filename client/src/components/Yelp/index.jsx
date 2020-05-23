import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import YelpCard from "../YelpCard";
import {Image, Title} from "../Styled";

class Yelp extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      eateries: [],
      loading: false,
      hasError: false
    }
  }

  componentDidMount(){
    console.log("yelp date " , this.props.state.breakfast)
    this.searchFood(this.props.state.state, this.props.state.city, this.props.state.breakfast, this.props.state.foodType, this.props.state.dinner, this.props.state.drinks, this.props.state.dessert)
  }

  searchFood = (state, city, breakfast, dinner, drinks, dessert, foodType) => {
    this.setState({loading: true})
    API.callYelp(state, city, breakfast, dinner, drinks, dessert, foodType)
    .then(res => {
      this.setState({ eateries : res.data, loading: false})
    })
    .catch(err => console.log(err));
  }

  saveEatery = (eatery) => {
    API.saveEatery(eatery)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Nav />
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError && <Title>There was an error searching for your Request. Please try again later.</Title>}
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
          transactions={eatery.transactions}
            /> ) 
        ): (
        <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Yelp;
