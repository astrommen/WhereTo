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
    this.searchOutdoors = query => {
      API.callRibd(query)
      .then(res => {
        const sitesArray = []
        for (var i=0; i < res.data.RECDATA.length; i++) {
          sitesArray.push (
            {
              id: res.data.RECDATA.RecAreaID,
              name: res.data.RECDATA.RecAreaName,
              description: res.data.RECDATA.RecAreaDescription,
              longitude: res.data.RECDATA.RecAreaLongitude,
              latitude: res.data.RECDATA.RecAreaLatitude,
              street: res.data.RECDATA.RECAREAADDRESS[0].RecAreaStreetAddress1,
              city: res.data.RECDATA.RECAREAADDRESS[0].RecArea.City,
              postalCode: res.data.RECDATA.RECAREAADDRESS[0].RecArea.PostalCode,
              state: res.data.RECDATA.RECAREAADDRESS[0].RecArea.AddressStateCode,
              link: res.data.RECDATA.LINK[0].URL,
              images: {
                description: res.data.RECDATA.MEDIA[i].Description,
                URL: res.data.RECDATA.MEDIA[i].URL
              },
              activities: res.data.RECDATA.ACTIVITY[i].ActivityName
          })
        }
        this.setState({ activities: sitesArray})
        console.log(this.state.activities)
      })
      .catch(err => console.log(err));
    };

    //handleInput Change
    //handleForm Submit

    saveOutdoorArea = (activity) => {
      API.saveOutdoorArea(activity)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }

  }


  render() {
    return (
      <div></div>
    );
  }
}

export default Outdoor;
