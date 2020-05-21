import React, { Component, useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import {Label} from "../Styled";


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
      tripName: "",
      location: "",
      tripStart: dateFill,
      city: "",
      state: "",
      breakfast: null,
      dinner: null,
      dessert: null,
      drinks: null,
      foodType: [],
      boating: null,
      fishing: null,
      hiking: null,
      beach: null,
      concert: null,
      sightseeing: null,
      sports: null,
      theatre: null,
      activities: []
    };
  }

  handleInputChange = event => {
    event.preventDefault()
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleChange = selectedOption => {
    this.setState(
      {selectedOption},
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
    console.log(this.state.state)
    console.log(this.state.foodType)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert('Success! We are preparing ' + this.state.tripName + "!")
    // let actArray=[]
    // let obj = {}
    // obj.location = this.state.city + "," + this.state.state;
    // obj.activities = this.state.sports + this.state.theatre + this.state.concert;
    // obj.outdoors = this.state.boating + this.state.fishing + this.state.hiking;
    // actArray.push(obj)
    // this.setState({ activities: actArray })
    // console.log(this.state.activities)

    const actArray=[]
    actArray.push({
      location: this.state.city + "," + this.state.state,
      activities: this.state.sports + this.state.theatre + this.state.concert,
      outdoors: this.state.boating + this.state.fishing + this.state.hiking,
      meal: this.state.breakfast + this.state.dinner + this.state.dessert + this.state.drinks
    });
    this.setState({ activities: actArray })
    console.log(this.state.activities)

    
    console.log(
      "tripName " + this.state.tripName,
      "\n date " + this.state.tripStart,
      "\n city " + this.state.city,
      "\n state " + this.state.state,
      this.state.breakfast,
      this.state.dinner,
      this.state.dessert,
      this.state.drinks,
      this.state.foodType,
      this.state.boating,
      this.state.fishing,
      this.state.hiking,
      this.state.beach,
      this.state.concert,
      this.state.sightseeing,
      this.state.sports,
      this.state.theatre
    )


    const foodCheckboxes = [
      {
        name: "breakfast",
        value: "breakfast_brunch",
        key: "cb1",
        label: "cb1",
        src: "./img/activities/breakfast.png",
        checked: `{this.state.breakfast || ''}`
      },
      {
        name: "dinner",
        value: "restaurants",
        key: "cb2",
        label: "cb2",
        src: "./img/activities/dinner.png",
        checked: `{this.state.dinner || ''}`
      },
      {
        name: "dessert",
        value: "dessert",
        key: "cb3",
        label: "cb3",
        src: "./img/activities/dessert.png",
        checked: `{this.state.dessert || ''}`
      },
      {
        name: "drinks",
        value: "breweries",
        key: "cb4",
        label: "cb4",
        src: "./img/activities/drinks.png",
        checked: `{this.state.drinks || ''}`
      }
    ]

    
    
  }
  
  render() {
    const {tripName} = this.state.tripName
    const foodOptions = [
        {value: "tradamerican",label: "American"},
        {value: "asianfusion", label: "Asian Fusion"},
        {value: "bbq", label: "Barbeque"},
        {value: "buffets", label: "Buffets"},
        {value: "cajun", label: "Cajun/Creole"},
        {value: "chinese", label: "Chinese"},
        {value: "comfortfood", label: "Comfort Food"},
        {value: "delis", label: "Delis"},
        {value: "diners", label: "Diners"},
        {value: "Greek", label: "Greek"},
        {value: "indpak", label: "Indian"},
        {value: "italian", label: "Italian"},
        {value: "japanese", label: "Japanese"},
        {value: "jewish", label: "Jewish"},
        {value: "mediterranean", label: "Mediterranean"},
        {value: "mexican", label: "Mexican"},
        {value: "pizza", label: "Pizza"},
        {value: "sandwiches", label: "Sandwiches"},
        {value: "sushi", label: "Sushi"},
        {value: "thai", label: "Thai"},
        {value: "vegan", label: "Vegan"},
        {value: "vegetarian", label: "Vegetarian"}
    ]

    const stateOptions=[
      {value: "AK", label: "Alaska"},
      {value: "AL", label: "Alabama"},
      {value: "AR", label: "Arkansas"},
      {value: "AZ", label: "Arizona"},
      {value: "CA", label: "California"},
      {value: "CO", label: "Colorado"},
      {value: "CT", label: "Connecticut"},
      {value: "DC", label: "District of Columbia"},
      {value: "DE", label: "Delaware"},
      {value: "FL", label: "Florida"},
      {value: "GA", label: "Georgia"},
      {value: "HI", label: "Hawaii"},
      {value: "IA", label: "Iowa"},
      {value: "ID", label: "Idaho"},
      {value: "IL", label: "Illinois"},
      {value: "IN", label: "Indiana"},
      {value: "KS", label: "Kansas"},
      {value: "KY", label: "Kentucky"},
      {value: "LA", label: "Louisiana"},
      {value: "MA", label: "Massachusetts"},
      {value: "MD", label: "Maryland"},
      {value: "ME", label: "Maine"},
      {value: "MI", label: "Michigan"},
      {value: "MN", label: "Minnesota"},
      {value: "MO", label: "Missouri"},
      {value: "MS", label: "Mississippi"},
      {value: "MT", label: "Montana"},
      {value: "NC", label: "North Carolina"},
      {value: "ND", label: "North Dakota"},
      {value: "NE", label: "Nebraska"},
      {value: "NH", label: "New Hampshire"},
      {value: "NJ", label: "New Jersey"},
      {value: "NM", label: "New Mexico"},
      {value: "NV", label: "Nevada"},
      {value: "NY", label: "New York"},
      {value: "OH", label: "Ohio"},
      {value: "OK", label: "Oklahoma"},
      {value: "OR", label: "Oregon"},
      {value: "PA", label: "Pennsylvania"},
      {value: "PR", label: "Puerto Rico"},
      {value: "RI", label: "Rhode Island"},
      {value: "SC", label: "South Carolina"},
      {value: "SD", label: "South Dakota"},
      {value: "TN", label: "Tennessee"},
      {value: "TX", label: "Texas"},
      {value: "UT", label: "Utah"},
      {value: "VA", label: "Virginia"},
      {value: "VT", label: "Vermont"},
      {value: "WA", label: "Washington"},
      {value: "WI", label: "Wisconsin"},
      {value: "WV", label: "West Virginia"},
      {value: "WY", label: "Wyoming"},

    ]

    function customTheme(theme) {
      return {
        ...theme,
        colors: {
          ...theme.colors,
          primary25: 'lightyellow',
          primary: 'black'
        }
      }
    }
    return (
      <div>
        <form className="mt-4" onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <Label htmlFor="name">Trip Name: {tripName} </Label>
              <input 
              name="tripName" 
              type="text" 
              value={this.state.tripName || ''}
              onChange={this.handleInputChange}
              id="name" className="form-control" placeholder="Trip Name" />
            </div>

            <div className="form-group col">
              <Label htmlFor="start">Date:</Label>
              <input
                className="form-control"
                name="tripStart"
                type="date"
                id="start"
                value={this.state.tripStart || ''}
                min={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <Label htmlFor="city">City</Label>
              <input id="city" 
              name="city"
              type="text" 
              value={this.state.city || ''}
              onChange={this.handleInputChange}
              className="form-control" placeholder="City" />
            </div>

            <div className="form-group col">
              <Label htmlFor="inputState">State</Label>
              <Select
              name="state"
              theme={customTheme}
              value={this.state.value}
              options={stateOptions}
              components={makeAnimated()}
              placeholder="select state"
              isMulti
              autoFocus
              onChange={this.handleChange} />
              {/* <select 
              name="state"
              value={this.state.value || ''}
              onChange={this.handleInputChange}
              id="inputState" className="form-control">
                <option defaultValue value="">Choose...</option>
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
              </select> */}
            </div>
          </div>

          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2">
              <input type="checkbox" id="cb1"
              name="breakfast"
              value="breakfast_brunch"
              checked={this.state.breakfast || ''}
              onChange={this.handleInputChange} />
              <Label htmlFor="cb1"><img alt="" src="./img/activities/breakfast.png" /><p>Breakfast</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb2"
              name="dinner"
              value="restaurants"
              checked={this.state.dinner || ''}
              onChange={this.handleInputChange} />
              <Label htmlFor="cb2"><img alt="" src="./img/activities/dinner.png" /><p>Dinner</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb3"
              name="dessert"
              value="dessert"
              checked={this.state.dessert || ''}
              onChange={this.handleInputChange} />
              <Label htmlFor="cb3"><img alt="" src="./img/activities/dessert.png" /><p>Dessert</p></Label></div>

            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb4" 
              name="drinks"
              value="breweries"
              checked={this.state.drinks || ''}
              onChange={this.handleInputChange} />
              <Label htmlFor="cb4"><img alt="" src="./img/activities/bar.png" /><p>Drinks</p></Label></div>

            <div className="form-group col">
              <Select
              name="foodType"
              theme={customTheme}
              value={this.state.value}
              options={foodOptions}
              components={makeAnimated()}
              placeholder="select food type"
              isMulti
              autoFocus
              onChange={this.handleChange} />
              // {/* <Label htmlFor="inputState">Type of Food:</Label>
              // <select id="inputState" 
              // name="foodType"
              // value={this.state.value || ''} 
              // onChange={this.handleInputChange} className="form-control">
              //   <option defaultValue value="">Choose...</option>
              //   <option value="tradamerican">American</option>
              //   <option value="asianfusion">Asian Fusion</option>
              //   <option value="bbq">Barbeque</option>
              //   <option value="buffets">Buffets</option>
              //   <option value="cajun">Cajun/Creole</option>
              //   <option value="chinese">Chinese</option>
              //   <option value="comfortfood">Comfort Food</option>
              //   <option value="delis">Delis</option>
              //   <option value="diners">Diners</option>
              //   <option value="Greek">Greek</option>
              //   <option value="indpak">Indian</option>
              //   <option value="Italitalianian">Italian</option>
              //   <option value="japanese">Japanese</option>
              //   <option value="jewish">Jewish</option>
              //   <option value="mediterranean">Mediterranean</option>
              //   <option value="mexican">Mexican</option>
              //   <option value="pizza">Pizza</option>
              //   <option value="sandwiches">Sandwiches</option>
              //   <option value="sushi">Sushi</option>
              //   <option value="thai">Thai</option>
              //   <option value="vegan">Vegan</option>
              //   <option value="vegetarian">Vegetarian</option>
              // </select> */}
            </div>
          </div>


          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2"><input type="checkbox" 
            name="boating"
            value="boating,"
            checked={this.state.boating || ''}
            onChange={this.handleInputChange}
            id="cb5" />
              <Label htmlFor="cb5"><img alt="" src="./img/activities/boating.png" /><p>Boating</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb6"
            name="fishing"
            value="fishing,"
            checked={this.state.fishing || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb6"><img alt="" src="./img/activities/fishing.png" /><p>Fishing</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb7"
            name="hiking"
            value="hiking,"
            checked={this.state.hiking || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb7"><img alt="" src="./img/activities/hiking.png" /><p>Hiking</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb8"
            name="beach"
            value="beach,"
            checked={this.state.beach || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb8"><img alt="" src="./img/activities/beach.png" /><p>Beach</p></Label></div>
          </div>

          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb9" 
            name="concert"
            value="concert,"
            checked={this.state.concert || ''}
            onChange={this.handleInputChange}/>
            <Label htmlFor="cb9"><img alt="" src="./img/activities/concert.png" /><p>Concert</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb10"
            name="sightseeing"
            value="sightseeing,"
            checked={this.state.sightseeing || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb10"><img alt="" src="./img/activities/sightseeing.png" /><p>Sightseeing</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb11"
            name="sports"
            value="sports,"
            checked={this.state.sports || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb11"><img alt="" src="./img/activities/sports.png" /><p>Sports</p></Label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb12"
            name="theatre"
            value="theatre,"
            checked={this.state.theatre || ''}
            onChange={this.handleInputChange}/>
              <Label htmlFor="cb12"><img alt="" src="./img/activities/theatre.png" /><p>Theatre</p></Label></div>
          </div>
          <div className="form-row">
          <div className="col-lg-9"></div>
          <div className="col-lg-3">
            <button type="submit"
            disabled={!(this.state.tripName && this.state.date)}
            value="Submit">Submit</button></div>
          </div>
          
        </form>
      </div>
    );
  }
}

export default FormDay;

