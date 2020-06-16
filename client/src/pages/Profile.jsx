import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "../components/Grid";
import VacationBtn from "../components/VacationBtn";
import ProfileBox from "../components/profileBox"
import ProfileFormBox from "../components/ProfileFormBox";
import { White, Title, Wrapper } from "../components/Styled";
import API from "../utils/API";
import jwt_decode from "jwt-decode";
import { Jumbo } from "../components/Styled";






class Profile extends Component {
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

    var today = new Date(),
      dateFill = today.getFullYear() + '-' + (month()) + '-' + day();


    const token = (window.localStorage.getItem("jwtToken"));

    const decoded = jwt_decode(token);

    const user = decoded.id;

    this.state = {
      today: today,
      date: dateFill,
      vacaIDs: [],
      vacaNames: [],
      pastVaca: [],
      upcomingVaca: [],
      userID: user,
      name: ''
    };

  }

  componentDidMount() {
    this.getUser();
  }


  onLogoutClick = event => {
    event.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/")
  }

  getUser = () => {
    let IDsArr = []
    API.getUser(this.state.userID)
      .then((res) => {
        // console.log(res.data) //Logs user found
        res.data.vacations.forEach((VacaIDs) => {
          let obj = {}
          obj.id = VacaIDs;
          IDsArr.push(obj)
          // Logs Vacation IDs          
          // console.log(obj)
        })
        // console.log(IDsArr)
        this.setState({
          vacaIDs: IDsArr,
          name: res.data.name
        })
        this.getNames()
      }).catch((err) => {
        console.log(err)
      })
  }

  getNames = () => {
    let pastArr = []
    let upcomingArr = []
    this.state.vacaIDs.forEach((data) => {
      // console.log(data.id)// Logs vacation IDs      
      let obj = {}
      API.getVacations(data.id).then((res) => {
        // console.log(res.data)
        obj.name = this.capitalize_Words(res.data.tripName);
        obj.key = res.data._id;
        obj.startDate = res.data.startDate;
        obj.endDate = res.data.endDate;
        obj.local = res.data.local;
        if (this.state.date <= res.data.dateStart.slice(0, 10)) {
          upcomingArr.push(obj)
          this.setState({
            upcomingVaca: upcomingArr
          })
        } else {
          pastArr.push(obj)
          this.setState({
            pastVaca: pastArr
          })
        }

      }).catch((err) => {
        console.log(err)
      })
    })
    // console.log(upcomingArr)
    // console.log(pastArr)
  }

  capitalize_Words = (str) => {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  }


  render() {
    return (
      <Wrapper>
        <Container>
          <Row >
            <Col size="md-12">
              <div className="d-flex justify-content-end">
                <button onClick={this.onLogoutClick}
                  className="btn btn-sm btn-secondary justify-content-end logout">Logout</button>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="col-md-6 align-self-center">
              <ProfileBox
                name={this.state.name}
                history={this.props.history}
                logoutUser={this.props.logoutUser}
              />
            </div>
            <Col size="md-6">
              <ProfileFormBox />
            </Col>
          </Row>
          <div className="row mt-4">
            <Col size="md-6">
              <Title>Past Vacations</Title>
              {this.state.pastVaca.map(items => (
                < VacationBtn
                  key={items.key}
                  id={items.key}
                  name={items.name}
                  local={items.local}
                />
              ))}
            </Col>
            <Col size="md-6">
              <Title>Upcoming Vacations</Title>
              {this.state.upcomingVaca.map(items => (
                <VacationBtn
                  key={items.key}
                  id={items.key}
                  name={items.name}
                  local={items.local}
                />
              ))}
            </Col>
          </div>

          <Jumbo className="mt-4">
            <h4>Suggested Vacations Coming Soon...</h4>
          </Jumbo>
        </Container>
      </Wrapper>
    );
  }
}

//LogOut code
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
