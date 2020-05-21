import React, { Component }  from 'react';
import OutdoorCard from "../OutdoorCard";
import Nav from "../Nav";
import API from "../../utils/API";

class Outdoor extends Component {
  state={
    sites: [],
    state: "PA",
    activities: "hiking"
  }

  componentDidMount() {
    this.searchOutdoors(this.state.state, this.state.activities);
  };
    
  searchOutdoors = (state, activities) => {
    API.callRibd(state, activities)
    .then(res => {
      console.log(res);
      this.setState({ sites: res.data})
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
        <Nav />
        {this.state.sites.length > 0 ? (
          this.state.sites.map((site) => 
          <OutdoorCard 
          key={site.id}
          id={site.id}
          name={site.name}
          description={site.description}
          directions={site.directions}
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
