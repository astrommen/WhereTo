import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

//Add function for date display
//Add function to capitalize first letters of city, state

class template extends Component {

  state = {}

  componentDidMount() {
    this.getVacationData()
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        console.log(res.data)
        console.log(res.data.tripName)
        this.setState({
          // userId: user,
          // vacaId: '5ec9ec9a10dd4e2decf1955f',
          // date: dateFill,
          // tomorrow: tomorrowFill,
          // redirect: false,
          // local: true,
          // whichPage: "",
          tripId: res.data._id,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart,
          city: res.data.city,
          state: res.data.state,
          boating: res.data.boating,
          fishing: res.data.fishing,
          hiking: res.data.hiking,
          beach: res.data.beach,
          concert: res.data.concert,
          sports: res.data.sports,
          theatre: res.data.theatre,
          sightseeing: res.data.sightseeing,
          breakfast: res.data.breakfast,
          dinner: res.data.dinner,
          dessert: res.data.dessert,
          drinks: res.data.drinks,
          foodType: res.data.foodType
        })
      }).catch(err => console.log(err))

  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="jumbotron text-center mt-5" id={this.state.tripId}>
          <h1 className="display-4">{this.state.tripName}</h1>
          <h4>{this.state.city}, {this.state.state}</h4>
          <h5>{this.state.dateStart}</h5>
          <hr className="my-4" />
          <p>Use the Tabs above to add events to your trip!</p>
        </div>
      </div>
    );
  }
}

export default template;
