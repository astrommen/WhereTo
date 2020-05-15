import React, { Component } from "react";
import OutdoorCard from "../OutdoorCard";
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

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //handleForm Submit

  saveOutdoorArea = (area) => {
    API.saveOutdoorArea(area)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.sites.length > 0 ? (
          this.state.sites.map((site) => 
          <OutdoorCard 
          id={site.id}
          name={site.name}
          description={site.description}
          longitude={site.longitude}
          latitude={site.latitude}
          street={site.street}
          city={site.city}
          postalCode={site.postalCode}
          state={site.state}
          link={site.link}
          images={site.images}
          activities={site.activities}
          />
          )
        ) : (
          <h3>No Restuls to Display</h3>
        )}
      </div>
    );
  }
}

export default Outdoor;
