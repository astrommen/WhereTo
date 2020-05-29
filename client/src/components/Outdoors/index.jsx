import React, { Component }  from 'react';
import API from "../../utils/API";
import Nav from "../Nav";
import OutdoorCard from "../OutdoorCard";
import FormOutdoors from "../FormOutdoors";
import { Image, Title, Wrapper, Jumbo, White } from "../Styled";

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
    this.getVacationData();
  };
    
  searchOutdoors = (city, state, boating, fishing, hiking, beach, camping, swimming) => {
    this.setState({loading: true})
    API.callRibd(city, state, boating, fishing, hiking, beach, camping, swimming)
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
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); 

    this.searchOutdoors(
      this.state.city,
       this.state.state, 
       this.state.boating, 
       this.state.fishing, 
       this.state.hiking, 
       this.state.beach, 
       this.state.camping, 
       this.state.swimming);
  }


  saveOutdoorArea = (area) => {
    API.saveOutdoorArea(area)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  getVacationData = () => {
    // console.log(this.props)
    // console.log(this.props.vacaId)
    API.getVacations(localStorage.getItem('vacaId'))
      .then((res) => {
        console.log(res.data)
        console.log(res.data.tripName)
        this.setState({
          local: res.data.local,
          tripId: res.data._id,
          tripName: res.data.tripName,
          dateStart: res.data.dateStart,
          city: res.data.city,
          state: res.data.state,
        })
      }).catch(err => console.log(err))
  }


  render() {
    return (
      <Wrapper>
        <Nav 
        local={this.state.local}/>

      <Jumbo local={this.state.local}>
        <FormOutdoors 
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
      </Jumbo> 

      
        {this.state.loading && <Image className="loading" src={process.env.PUBLIC_URL + './img/loading.gif'} alt="loading" />}
        {this.state.hasError &&             
            <Jumbo local={this.state.local}>
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
          <Jumbo local={this.state.local}>
          <h3>No Results to Display</h3>
          <White>Select which activities you are interested in to populate your results.</White>
        </Jumbo>
    )}
      </Wrapper>
    );
  }
}

export default Outdoor;
