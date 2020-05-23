import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import {Label} from "../Styled";
import "./style.css";

class FormDay extends Component {
  constructor(props) {
    super(props);

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

    let dayPlusOne = () => {
      let m = today.getDate() + 1
      if (m < 10) {
        return "0" + m;
      } else {
        return m;
      }
    }

    var today = new Date(),
      dateFill = today.getFullYear() + '-' + (month()) + '-' + day();

    var tomorrow = new Date(),
      tomorrowFill = tomorrow.getFullYear() + '-' + (month()) + '-' + dayPlusOne();

    this.state = {
      date: dateFill,
      tomorrow: tomorrowFill,
    redirect: false,
    whichPage: "",
    tripName: "",
    dateStart: dateFill,
      city: "",
      state: "",
      boating: "",
      fishing: "",
      hiking: "",
      beach: "",
      concert: "",
      sports: "",
      theatre: "",
    sightseeing: "",
      breakfast: "",
      dinner: "",
      dessert: "",
      drinks: "",
      foodType: ""
  };

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]:value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.updateAppState(this.state);
    this.props.history.push("/daytrip")
  }

  render() {
    return (
      <div>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col">
              <Label for="name">Trip Name</Label>
              <input 
              name="tripName" 
              type="text" 
              value={this.state.tripName}
              onChange={this.handleInputChange}
              id="name" className="form-control" placeholder="Trip Name" />
            </div>

            <div className="form-group col">
              <Label for="start">Date:</Label>
              <input
                className="form-control"
                type="date"
                id="start"
                name="dateStart"
                defaultValue={this.state.date}
                min={this.state.date}
                value={this.state.dateStart}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <Label for="city">City</Label>
              <input id="city" type="text" 
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              className="form-control" placeholder="City" />
            </div>
            <div className="form-group col">
              <Label for="inputState">State</Label>
              <select 
              name="state"
              value={this.state.value}
              onChange={this.handleInputChange}
              id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2">
              <input type="checkbox" id="cb1"
              name="breakfast"
              value="breakfast_brunch"
              checked={this.state.breakfast}
              onChange={this.handleInputChange} />
              <Label for="cb1"><img alt="" src="./img/activities/breakfast.png" /><p>Breakfast</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb2"
              name="dinner"
              value="restaurants"
              checked={this.state.dinner}
              onChange={this.handleInputChange} />
              <Label for="cb2"><img alt="" src="./img/activities/dinner.png" /><p>Dinner</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb3"
              name="dessert"
              value="dessert"
              checked={this.state.dessert}
              onChange={this.handleInputChange} />
              <Label for="cb3"><img alt="" src="./img/activities/dessert.png" /><p>Dessert</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb4" 
              name="drinks"
              value="beer_and_wine"
              checked={this.state.drinks}
              onChange={this.handleInputChange} />
              <Label for="cb4"><img alt="" src="./img/activities/bar.png" /><p>Drinks</p></Label></div>

            <div className="form-group col">
              <Label for="inputState">Type of Food:</Label>
              <select id="inputState" 
              name="foodType"
              value={this.state.value} 
              onChange={this.handleInputChange} className="form-control">
                <option selected>Choose...</option>
                <option value="tradamerican">American</option>
                <option value="asianfusion">Asian Fusion</option>
                <option value="bbq">Barbeque</option>
                <option value="buffets">Buffets</option>
                <option value="cajun">Cajun/Creole</option>
                <option value="chinese">Chinese</option>
                <option value="comfortfood">Comfort Food</option>
                <option value="delis">Delis</option>
                <option value="diners">Diners</option>
                <option value="Greek">Greek</option>
                <option value="indpak">Indian</option>
                <option value="Italitalianian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="jewish">Jewish</option>
                <option value="">Mediterranean</option>
                <option value="mediterranean">Mexican</option>
                <option value="pizza">Pizza</option>
                <option value="sandwiches">Sandwiches</option>
                <option value="sushi">Sushi</option>
                <option value="thai">Thai</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>
          </div>


          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2"><input type="checkbox" 
            name="boating"
            value="boating,"
            checked={this.state.boating}
            onChange={this.handleInputChange}
            id="cb5" />
              <Label for="cb5"><img alt="" src="./img/activities/boating.png" /><p>Boating</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb6"
            name="fishing"
            value="fishing,"
            checked={this.state.fishing}
            onChange={this.handleInputChange}/>
              <Label for="cb6"><img alt="" src="./img/activities/fishing.png" /><p>Fishing</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb7"
            name="hiking"
            value="hiking,"
            checked={this.state.hiking}
            onChange={this.handleInputChange}/>
              <Label for="cb7"><img alt="" src="./img/activities/hiking.png" /><p>Hiking</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb8"
            name="beach"
            value="beach,"
            checked={this.state.beach}
            onChange={this.handleInputChange}/>
              <Label for="cb8"><img alt="" src="./img/activities/beach.png" /><p>Beach</p></Label></div>
          </div>

          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb9" 
            name="concert"
            value="concert,"
            checked={this.state.concert}
            onChange={this.handleInputChange}/>
            <Label for="cb9"><img alt="" src="./img/activities/concert.png" /><p>Concert</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb10"
            name="sightseeing"
            value="park,museum"
            checked={this.state.sightseeing}
            onChange={this.handleInputChange}/>
              <Label for="cb10"><img alt="" src="./img/activities/sightseeing.png" /><p>Sightseeing</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb11"
            name="sports"
            value="sports,"
            checked={this.state.sports}
            onChange={this.handleInputChange}/>
              <Label for="cb11"><img alt="" src="./img/activities/sports.png" /><p>Sports</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb12"
            name="theatre"
            value="theatre"
            checked={this.state.theatre}
            onChange={this.handleInputChange}/>
              <Label for="cb12"><img alt="" src="./img/activities/theatre.png" /><p>Theatre</p></Label></div>
          </div>
          <div className="form-row">
          <div className="col-lg-9"></div>
          <div className="col-lg-3">

            <button type="submit"
            disabled={!(this.state.tripName && this.state.date && this.state.state || this.state.city)}
            onClick={this.handleFormSubmit}>Submit</button></div>
          </div>

          
        </form>
      </div>
    );
  }
}

export default withRouter(FormDay);

