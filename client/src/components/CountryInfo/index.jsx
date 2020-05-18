import React, { Component } from "react";
import CountryCard from "../CountryCard";
import API from "../../utils/API";
import "./style.css";

class CountryInfo extends Component {
  state={
    info: [],
    country: "USA"
  }
  
  componentDidMount() {
    this.searchCountry(this.state.country)
  };

  searchCountry = country => {
    API.callCountries(country)
    .then(res => {
      console.log(res);
      this.setState({info: res.data})
      console.log(this.state.info)
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
  
    //handleForm Submit

    saveCountryInfo = country => {
      API.saveCountryInfo(country)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }

  render() {
    let langArray = this.state.info.languages;
    let currArray = this.state.info.currencies;
    console.log(langArray)
    return (
      <div>
        {this.state.info ? (
          <CountryCard 
          key={this.state.info.name}
          id={this.state.info.name}
          latitude={this.state.info.latitude}
          longitude={this.state.info.longitude}
          currencies={currArray}
          languages={langArray}
          flag={this.state.info.flag}
          info={this.state.info}
          />
        ) : (<h3>No Information Available</h3>)}

      </div>
    );
  }
}

export default CountryInfo;
