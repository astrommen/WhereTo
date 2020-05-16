import React, { Component } from "react";
import API from "../../../utils/API"
import "./style.css";

class DayPlanner extends Component {
  state = {
    itineray_items =[],
    city = "",
    startDate = "",
    endDate = ""
  }

  componentDidMount() {
    this.searchDayPlanner();
  };

  searchDayPlanner = (city) => {
    API.callDayPlanner(city, startDate, endDate)
    .then(res => {
      const plannerArray = []
      for (var i=0; i < results[0].days[0].length; i++) {
        plannerArray.push(
          {date: results[0].days[0][i].date,
            itinerary_items: results[0].days[0][i].itinerary_items
        })
      }
      this.setState({ itineray_items: plannerArray })
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
    return (
      <div>
        {this.state.itineray_items.length > 0 ? (
          this.state.itineray_items.map((itinerary) =>
          <DayPlannerCard 
          date={itinerary.date}
          itinerary_items={itinerary.items}
          />)
        ) : <h3>No Results to Display</h3>}
      </div>
    );
  }
}

export default DayPlanner;
