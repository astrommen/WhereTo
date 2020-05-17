import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import DayPlannerCard from "../DayPlannerCard";
import "./style.css";

class DayPlanner extends Component {
  state = {
    dayplans: [],
    city: "Paris",
    startDate: "2020-06-03",
    endDate: "2020-06-06"
  }

  componentDidMount() {
    this.searchDayPlanner(this.state.city, this.state.startDate, this.state.endDate);
  };

  searchDayPlanner = (city, startDate, endDate) => {
    API.callDayPlanner(city, startDate, endDate)
    .then(res => {
      console.log(res);
      this.setState({ dayplans : res.data })
      console.log(this.state.dayplans)
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

  savePlan = (plan) => {
    console.log(plan)
    API.savePlan(plan)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    let daysArray = this.state.dayplans.days;
    console.log(daysArray)
    return (
      <div>
        <Nav />
        {this.state.dayplans ? (
          <DayPlannerCard
          key={this.state.dayplans.id} 
          id={this.state.dayplans.id}
          name={this.state.dayplans.name}
          latitude={this.state.dayplans.latitude}
          longitude={this.state.dayplans.longitude}
          locDescription={this.state.dayplans.snippet}
          days={daysArray}
          />)
         : <h3>No Results to Display</h3>}
      </div>
    );
  }
}

export default DayPlanner;
