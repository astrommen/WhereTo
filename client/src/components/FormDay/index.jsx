import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import { Label, Wrapper, Jumbo, Title, Submit } from "../Styled";
import { Container, Row, Col } from "../Grid";
import jwt_decode from "jwt-decode";
import "./style.css";
import API from "../../utils/API";

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

  
    const token = (window.localStorage.getItem("jwtToken"));
    const decoded = jwt_decode(token);
    const user = decoded.id;

    var today = new Date(),
      dateFill = today.getFullYear() + '-' + (month()) + '-' + day();

    var tomorrow = new Date(),
      tomorrowFill = tomorrow.getFullYear() + '-' + (month()) + '-' + dayPlusOne();   
    
      // var dateEnd = new Date(this.state.dateStart.getDate() + 1)

    this.state = {
      userId: user,
      vacaId: '',
      date: dateFill,
      tomorrow: tomorrowFill,
      redirect: false,
      local: true,
      whichPage: "",
      tripName: "",
      dateStart: dateFill,
      dateEnd: "",
      city: "",
      state: "",
    };
  }

  // endDate = () => {
  //   var dateParts = this.state.dateStart.split('-');
  //   var y = parseInt(dateParts [0], 10);
  //   var m = parseInt(dateParts [1], 10);
  //   var d = parseInt(dateParts [2], 10);
  //   // var endDate = new Date(Date.UTC(y, m-1, d+1));
  //   var endDate = `${y}-${m}-${d+1}`
  //   // console.log("new Date: ", new Date( y, m, d+1))
  //   // console.log("new Date: ", y, '-',m, '-',d+1)
  //   console.log("endDate: " ,endDate)
  //   this.setState({
  //     dateEnd: endDate
  //   })  
  //   // var endDate = new Date(this.state.dateStart + 1)
  //     // console.log("end Date Function end: ", this.state.dateEnd)
  // }

  saveTrip = (vacation) => {
    console.log("FormDay")
    API.saveTrip(vacation)
      .then(res => {
        localStorage.setItem('vacaId', res.data._id);
        console.log(res.data._id)
        this.setState({
          vacaId: res.data._id
        })
        this.props.updateAppState(this.state);
        this.props.history.push("/daytrip")
      }).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    if (event.target.type === "checkbox") {
      if (!this.state[name]) {

        this.setState({
          [name]: value
        });
      } else {
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

  // handleDateChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   })
  //   this.endDate();
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    // this.endDate();
    console.log("handle Form Submit: ", this.state.dateEnd)
    this.saveTrip({
      userId: this.state.userId,
      tripName: this.state.tripName,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
      city: this.state.city,
      state: this.state.state,
      local: this.state.local,
    });
  }

  render() {
    return (
      <Jumbo local={this.state.local}>
        <Container>
          <Row>
            <Col size="md-2">
              <Link to="/profile"><img className="logo" className="img-fluid" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" /></Link>
            </Col>
            <Col size="md-10"><Title>Ready to Explore?</Title>Get started by filling out the basics of your trip:</Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Wrapper>
                <form className="mt-4" onSubmit={this.handleFormSubmit}>
                  <Row>
                    <Col size="md-6" className="form-group">
                      <Label htmlFor="name">Trip Name</Label>
                      <input
                        name="tripName"
                        type="text"
                        value={this.state.tripName}
                        onChange={this.handleInputChange}
                        id="name" className="form-control" placeholder="Trip Name"
                        required
                      />
                    </Col>

                    <Col size="md-6" className="form-group col">
                      <Label htmlFor="start">Date:</Label>
                      <input
                        className="form-control"
                        type="date"
                        id="start"
                        name="dateStart"
                        defaultValue={this.state.date}
                        min={this.state.date}
                        onChange={this.handleInputChange}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6" className="form-group">
                      <Label htmlFor="city">City</Label>
                      <input id="city" type="text"
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        className="form-control" placeholder="City"
                        required
                      />
                    </Col>
                    <Col size="md-6" className="form-group">
                      <Label htmlFor="inputState">State</Label>
                      <select
                        name="state"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        id="inputState" className="form-control"
                        required
                      >
                        <option value=''>Choose...</option>
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
                    </Col>
                  </Row>

                  <Row className="form-row text-right">
                    <Submit type="submit"
                      // disabled={!(this.state.tripName && this.state.date && this.state.state || this.state.city)}
                      // onClick={this.handleFormSubmit}
                      local={this.state.local} ><i className="far fa-compass"></i> Submit </Submit>
                  </Row>
                </form>
              </Wrapper>
            </Col>
          </Row>
        </Container>
      </Jumbo>
    );
  }
}

export default withRouter(FormDay);
// export default FormDay;
