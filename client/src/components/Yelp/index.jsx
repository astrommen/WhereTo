import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import FoodForm from "../FoodForm";
import FormDrinks from "../FormDrinks"
import YelpCard from "../YelpCard";
import {Image, Title, Wrapper} from "../Styled";

class Yelp extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      eateries: [],
      breakfast: "",
      dinner: "",
      dessert: "",
      drinks: "",
      foodType: "",
      loading: false,
      hasError: false
    }
  }

  componentDidMount(){
    console.log("yelp date " , this.props.state.breakfast)
  }

  searchFood = (state, city, breakfast, dinner, dessert, drinks, foodType) => {
    this.setState({loading: true})
    API.callYelp(state, city, breakfast, dinner, dessert, drinks, foodType)
    .then(res => {
      this.setState({ eateries : res.data, loading: false})
    })
    .catch(err => this.setState({hasError: true, loading: false}));
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
        console.log("check")
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
    console.log("breakfast: ", this.state.breakfast + "\n dinner: ", this.state.dinner, "\n dessert: " , this.state.dessert, "\n foodType: ", this.state.foodType,  "\n drinks: ", this.state.drinks);
    this.searchFood(this.props.state.state, this.props.state.city, this.state.breakfast, this.state.dessert, this.state.dinner, this.state.foodType, this.state.drinks)
  }

  saveEatery = (eatery) => {
    API.saveEatery(eatery)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        <FoodForm 
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
        <FormDrinks 
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>

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
      </Wrapper>
    );
  }
}

export default Yelp;
