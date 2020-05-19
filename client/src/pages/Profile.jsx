import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "../components/Grid";
import VacationBtn from "../components/VacationBtn"
import API from "../utils/API";

// Aja Log Out Btn
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

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



    this.state = {
      today: today,
      date: dateFill,
      vacaIDs: [],
      vacaNames: [],
      pastVaca: [],
      upcomingVaca: []
    };
  }

  componentDidMount() {
    // this.getUser()
  }

  getUser = () => {
    let IDsArr = []
    API.getUser("Bill")
    // User.findOne({ email })
      .then((res) => {
        // console.log(res.data) Logs user found
        res.data.vacations.forEach((VacaIDs) => {
          let obj = {}
          obj.id = VacaIDs;
          IDsArr.push(obj)
          // console.log(items) Logs Vacation IDs          
        })
        // console.log(IDsArr)
        this.setState({
          vacaIDs: IDsArr
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
        // console.log(res)
        // console.log(res.data.name)// Logs Vacation names
        console.log(res.data.startDate.slice(0, 10))
        console.log(this.state.date)
        console.log(this.state.date < res.data.startDate.slice(0, 10))
        // console.log("End:", res.data.endDate)
        obj.name = res.data.name;
        obj.key = res.data._id;
        obj.startDate = res.data.startDate;
        obj.endDate = res.data.endDate;
        obj.activities = res.data.activities;
        if (this.state.date > res.data.startDate.slice(0, 10)) {
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
        console.log(err.response)
      })
    })
  }

  // LogOut Code
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };


  render() {
    // LogOut code
    const { user } = this.props.auth;

    return (
      <div className="">
        <div className="row justify-content-around">
          <div className="col-md-6">
            <h4>Profile</h4>

          </div>
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header">
                Card title
				</h5>
              <div className="card-body">
                <p className="card-text">
                  Card content
					</p>
              </div>
              <div className="card-footer">
                Card footer
				</div>
            </div>
          </div>
        </div>
        <div className="row mt-5  justisfy-content-around">
          <div className="col-md-6">
            <h4>Past Vacations</h4>
            {this.state.pastVaca.map(items => (
              <VacationBtn
                key={items.key}
                name={items.name}
              />
            ))}
          </div>
          <div className="col-md-6">
            <h4>Upcoming Vacations</h4>
            {this.state.upcomingVaca.map(items => (
              <VacationBtn
                key={items.key}
                name={items.name}
              />
            ))}
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-md-10">
            <div className="card">
              <h5 className="card-header">
                Card title
				</h5>
              <div className="card-body">
                <p className="card-text">
                  Card content
					</p>
              </div>
              <div className="card-footer">
                Card footer
				</div>
            </div>
          </div>
        </div>
        {/* { LogOut Code } */}
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
            backgroundColor: "white"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
          Logout
        </button>
      </div>
    );
  }
}

// LogOut code
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);

// export default Profile;
