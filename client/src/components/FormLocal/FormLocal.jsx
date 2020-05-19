import React, { Component } from "react";
import Wrapper from "../Wrapper";
import "./style.css";


class Login extends Component {
  constructor() {
    super();

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
      tomorrow: tomorrowFill
    };
  }





  render() {
    return (
      <Wrapper>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col">
              <label for="name">Vacation Name</label>
              <input id="name" type="text" className="form-control" placeholder="First name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label for="start">Start date:</label>
              <input
                className="form-control"
                type="date"
                id="start"
                name="trip-start"
                defaultValue={this.state.date}
                min={this.state.date}
              />
            </div>
            <div className="form-group col">
              <label for="end">End date:</label>
              <input
                className="form-control"
                type="date"
                id="end"
                name="trip-end"
                defaultValue={this.state.tomorrow}
                min={this.state.tomorrow}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label for="city">City</label>
              <input id="city" type="text" className="form-control" placeholder="City" />
            </div>
            <div className="form-group col">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
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
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb1" />
              <label for="cb1"><img alt="" src="./img/activities/bar.png" /><p>Drinks</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb2" />
              <label for="cb2"><img alt="" src="./img/activities/beach.png" /><p>Beach</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb3" />
              <label for="cb3"><img alt="" src="./img/activities/camping.png" /><p>Camping</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb4" />
              <label for="cb4"><img alt="" src="./img/activities/concert.png" /><p>Concerts</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb5" />
              <label for="cb5"><img alt="" src="./img/activities/dinner.png" /><p>Dinner</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb6" />
              <label for="cb6"><img alt="" src="./img/activities/hiking.png" /><p>Hiking</p></label></div>
          </div>
          <div className="form-row text-center">
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb7" />
              <label for="cb7"><img alt="" src="./img/activities/movies.png" /><p>Movies</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb8" />
              <label for="cb8"><img alt="" src="./img/activities/sightseeing.png" /><p>Sightseeing</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb9" />
              <label for="cb9"><img alt="" src="./img/activities/sports.png" /><p>Sports</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb10" />
              <label for="cb10"><img alt="" src="./img/activities/boating.png" /><p>Boating</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb11" />
              <label for="cb11"><img alt="" src="./img/activities/fishing.png" /><p>Fishing</p></label></div>
            <div className="col-sm-6 col-lg-2"><input type="checkbox" id="cb12" />
              <label for="cb12"><img alt="" src="./img/activities/theatre.png" /><p>Theatre</p></label></div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Wrapper>
    );
  }
}

export default Login;

