import React, { Component }  from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import OutdoorCard from "../OutdoorCard";
import {Image, Title, Wrapper} from "../Styled";

class Outdoor extends Component {
  constructor(props) {
    super(props)

    this.state={
      sites: [],
      loading: false,
      hasError: false
    }
  }

  componentDidMount() {
    this.searchOutdoors(this.props.state.state, this.props.state.city, this.props.state.boating, this.props.state.fishing, this.props.state.hiking, this.props.state.beach);
    console.log("outdoors", this.props.state)
  };
    
  searchOutdoors = (state, city, boating, fishing, hiking, beach) => {
    this.setState({loading: true})
    API.callRibd(state, city, boating, fishing, hiking, beach)
    .then(res => {
      console.log(res);
      this.setState({ sites: res.data, loading: false})
      console.log(this.state.sites)
    })
    .catch(err => this.setState({hasError: true, loading: false}));
  };

  saveOutdoorArea = (area) => {
    API.saveOutdoorArea(area)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError && <Title>There was an error searching for your Request. Please try again later.</Title>}
        {this.state.sites.length > 0 ? (
          this.state.sites.map((site) => 
          <OutdoorCard 
          key={site.id}
          id={site.id}
          name={site.name}
          description={site.description}
          directions={site.directions || "Directions not available"}
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
      </Wrapper>
    );
  }
}

export default Outdoor;
