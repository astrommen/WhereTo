import React, { Component } from "react";
import {Col, Row, Container} from "../Grid";
import "./style.css";
import API from "../../../utils/API";

class Outdoor extends Component {
  state={
    sites: [],
    state: "",
    activities: []
  }

  componentDidMount() {
    this.searchOutdoors();
  };
    
  searchOutdoors = query => {
    API.callRibd(query)
    .then(res => {
      const sitesArray = []
      for (var i=0; i < res.data.RECDATA.length; i++) {
        sitesArray.push (
          {
            id: res.data.RECDATA[i].RecAreaID,
            name: res.data.RECDATA[i].RecAreaName,
            description: res.data.RECDATA[i].RecAreaDescription,
            longitude: res.data.RECDATA[i].RecAreaLongitude,
            latitude: res.data.RECDATA[i].RecAreaLatitude,
            street: res.data.RECDATA[i].RECAREAADDRESS[0].RecAreaStreetAddress1,
            city: res.data.RECDATA[i].RECAREAADDRESS[0].RecArea.City,
            postalCode: res.data.RECDATA[i].RECAREAADDRESS[0].RecArea.PostalCode,
            state: res.data.RECDATA[i].RECAREAADDRESS[0].RecArea.AddressStateCode,
            link: res.data.RECDATA[i].LINK[0].URL,
            images: res.data.RECDATA[i].MEDIA,
            activities: res.data.RECDATA[i].ACTIVITY
        })
      }
      this.setState({ sites: sitesArray})
      console.log(this.state.sites)
    })
    .catch(err => console.log(err));
  };

  //handleInput Change
  //handleForm Submit

  saveOutdoorArea = (area) => {
    API.saveOutdoorArea(area)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Outdoor;
