import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import NavVac from "../NavVac";
import FoodForm from "../FoodForm";
import FormDrinks from "../FormDrinks"
import YelpCard from "../YelpCard";
import { Container, Row, Col } from "../Grid";
import { Image, Title, Wrapper, Jumbo, ImageButton, White } from "../Styled";

class Yelp extends Component {
  constructor(props) {
    super(props)

    let month = () => {
      let m = today.getMonth() + 1
      if (m < 10) {
        return "0" + m;
      } else {
        return m;
      }
    }

    let day = () => {
      let m = today.getDate()
      if (m < 10) {
        return "0" + m;
      } else {
        return m;
      }
    }

    var today = new Date(), 
    dateFill = today.getFullYear() + '-' + (month()) + '-' + day()

    this.state = {
      date: dateFill,
      eateries: [],
      breakfast: "",
      dinner: "",
      dessert: "",
      drinks: "",
      foodType: "",
      foodChoice: true,
      drinkChoice: false,
      loading: false,
      hasError: false
    }
  }

  componentDidMount() {
    // console.log("yelp date " , this.props.state.breakfast)
    this.getVacationData()
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        // console.log(res.data)
        // console.log(res.data.tripName)
        this.setState({
          local: res.data.local,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart,
          city: res.data.city,
          state: res.data.state,
        })
      }).catch(err => console.log(err))
  }

  searchFood = (city, state, breakfast, dinner, dessert, drinks, foodType) => {
    this.setState({ loading: true })
    API.callYelp(city, state, breakfast, dinner, dessert, drinks, foodType)
      .then(res => {
        this.setState({ eateries: res.data, loading: false })
      })
      .catch(err => this.setState({ hasError: true, loading: false }));
  }

  handleFood = () => {
    if (this.state.foodChoice === false) {
      this.setState({ foodChoice: true })
    } else (this.setState({ foodChoice: false }))
  }

  handleDrink = () => {
    if (this.state.drinkChoice === false) {
      this.setState({ drinkChoice: true })
    } else (this.setState({ drinkChoice: false }))
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
        console.log("uncheck")
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
    console.log("breakfast: ", this.state.breakfast + "\n dinner: ", this.state.dinner, "\n dessert: ", this.state.dessert, "\n foodType: ", this.state.foodType, "\n drinks: ", this.state.drinks);
    this.searchFood(this.state.city, this.state.state, this.state.breakfast, this.state.dessert, this.state.dinner, this.state.foodType, this.state.drinks);
    this.setState({ foodType: '', drinks: '' })
  }

  saveEatery = (eatery) => {
    API.saveEatery(eatery)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state)
    return (
      <Wrapper>
      {this.state.local ? 
        <Nav 
        dateStart={this.state.dateStart}
        vacaId={localStorage.getItem('vacaId')}
        /> :
        <NavVac
        dateEnd={this.state.dateEnd}
        vacaId={localStorage.getItem('vacaId')} />
      }
        <Container>
          <div className=" row text-center text-white">
            <Col size="md-6">
              <ImageButton onClick={this.handleFood}> <img className="img-fluid mb-3" src={process.env.PUBLIC_URL + './img/activities/food.png'} alt="food options" />Food</ImageButton>
            </Col>
            <Col size="md-6">
              <ImageButton onClick={this.handleDrink}> <img className="img-fluid mb-3" src={process.env.PUBLIC_URL + './img/activities/coffee.png'} alt="drink options" />Drinks</ImageButton>
            </Col>
          </div>
        </Container>

        {this.state.foodChoice &&
          <Jumbo local={this.state.local}>
            <FoodForm
              value={this.state.value}
              local={this.state.local}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit} />
          </Jumbo>
        }

        {this.state.drinkChoice &&
          <Jumbo className="mb-2" local={this.state.local}>
            <FormDrinks
              value={this.state.value}
              local={this.state.local}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit} />
          </Jumbo>}

        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError &&
          <Jumbo local={this.state.local}>
            <h5>There was an error searching for your Request.</h5>
            <White>Please try a different selection or attempt again later.</White>
          </Jumbo>}

        {this.state.eateries.length > 0 ? (
          this.state.eateries.map((eatery) =>
            <YelpCard
              key={eatery.id}
              id={eatery.id}
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
            />)
        ) : (
            <Jumbo local={this.state.local}>
              <h3>No Results to Display</h3>
              <White center>Use the food and drink forms to populate your options.</White>
            </Jumbo>
          )}
      </Wrapper>
    );
  }
}

export default Yelp;
