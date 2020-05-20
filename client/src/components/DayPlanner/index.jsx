import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import DayPlannerCard from "../DayPlannerCard";
// import {List, ListItem} from "../List";

class DayPlanner extends Component {
  state = {
    dayplans: [],
    city: "Paris",
    startDate: "2020-06-03",
    endDate: "2020-06-04",
    // daysArray: []
  }

  componentDidMount() {
    this.searchDayPlanner(this.state.city, this.state.startDate, this.state.endDate);
  };

  searchDayPlanner = (city, startDate, endDate) => {
    API.callDayPlanner(city, startDate, endDate)
    .then(res => {
      this.setState({ dayplans : res.data })
      // console.log("information: " + JSON.stringify(this.state.dayplans))
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
    // console.log(plan)
    API.savePlan(plan)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    // let daysArray = this.state.dayplans.items1;
    // for (var i=0 ; i<this.state.days.items1; i++) {
    //   daysArray.push({
    //     id: poi.id,
    //     description: description,
    //     latitude: poi.coordinates[0],
    //     longitude: poi.coordinates[1],
    //     name: poi.name
    //   })
    // }
    // console.log(daysArray);
    // console.log("here" + this.state.dayplans.length)

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
          image={this.state.dayplans.image}
          locDescription={this.state.dayplans.snippet}
          date1={this.state.dayplans.date1}
          itinerary={this.state.dayplans.itinerary}
          // date2={this.state.dayplans.date2}
          // items2={this.state.dayplans.items2}
          />

          )
         : <h3>No Results to Display</h3>}
      {/* <Container>
        <Row>
          <Col size="md-12">
        {this.state.dayplans.items1.length > 0 ? 
        <div>
          <List>
            {this.state.dayplans.items1.map(item =>
              <ListItem key={item.poi.id}>
                <Row>
                  <Col size="md-12">
                    {item.description}
                  </Col>
                </Row>
              </ListItem>
              )}
          </List>
        </div>
        : <h3>Check to be sure you have only put two days into your day planner.</h3>}
          </Col>
        </Row>
      </Container> */}
      </div>
    );
  }
}

export default DayPlanner;
