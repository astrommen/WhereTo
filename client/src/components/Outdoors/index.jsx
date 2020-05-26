import React, { Component }  from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import OutdoorCard from "../OutdoorCard";
import FormOutdoors from "../FormOutdoors";
import { Image, Title, Wrapper, Jumbo } from "../Styled";

class Outdoor extends Component {
  constructor(props) {
    super(props)

    this.state={
      sites: [],
      loading: false,
      hasError: false,
      hiking: "",
      boating: "",
      fishing: "",
      beach: "",
      swimming: "",
      camping: "",
    }

  }

  componentDidMount() {
    console.log("outdoors", this.props.state)
  };
    
  searchOutdoors = (state, city, boating, fishing, hiking, beach, camping, swimming) => {
    this.setState({loading: true})
    API.callRibd(state, city, boating, fishing, hiking, beach, camping, swimming)
    .then(res => {
      console.log(res);
      this.setState({ sites: res.data, loading: false})
      console.log(this.state.sites)
    })
    .catch(err => this.setState({hasError: true, loading: false}));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    
    if (event.target.type === "checkbox") {
      if (!this.state[name]) {
        console.log("check")
        this.setState({
          [name]: value
        });
      } else {
        console.log("check")
        this.setState({
          [name]: ''
        });
      }
    } else {
      this.setState({
        [name]: value
      });
      console.log(this.state.foodType)
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); 

    this.searchOutdoors(this.props.state.state, this.props.state.city, this.state.boating, this.state.fishing, this.state.hiking, this.state.beach, this.state.camping, this.state.swimming);
    console.log("results: " , this.state.boating, this.state.fishing, this.state.hiking, this.state.beach, this.state.camping, this.state.swimming)
  }


  saveOutdoorArea = (area) => {
    API.saveOutdoorArea(area)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        <Jumbo>
        <FormOutdoors 
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
        </Jumbo>
        
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError &&             
            <Jumbo>
              <h5>There was an error searching for your Request.</h5>
              <White>Please try a different selection or attempt again later.</White>
            </Jumbo>}
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
          <Jumbo>
          <h3>No Results to Display</h3>
          <White>Use the food and drink forms to populate your options.</White>
        </Jumbo>
    )}
      </Wrapper>
    );
  }
}

export default Outdoor;
