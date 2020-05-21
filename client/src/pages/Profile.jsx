import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "../components/Grid";
import VacationBtn from "../components/VacationBtn";
import ProfileBox from "../components/profileBox"
import ProfileFormBox from "../components/ProfileFormBox";
import API from "../utils/API";
import jwt_decode from "jwt-decode";





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



  getUser = () => {
    let IDsArr = []
    API.getUser(this.state.userID)
      .then((res) => {
        console.log(res.data) //Logs user found
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
        console.log(res.data)
        obj.name = res.data.name;
        obj.key = res.data._id;
        obj.startDate = res.data.startDate;
        obj.endDate = res.data.endDate;
        obj.activities = res.data.activities;
        obj.local = res.data.local;
        if (this.state.date < res.data.startDate.slice(0, 10)) {
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
    console.log(upcomingArr)
    console.log(pastArr)
  }




  render() {
    return (
      <div className="">
        <div className="row justify-content-around">
          <div className="col-md-6">
            <ProfileBox
              name={this.state.name}
              history={this.props.history}
              logoutUser={this.props.logoutUser}
            />
          </div>
          <div className="col-md-6">
            <ProfileFormBox />
          </div>
        </div>
        <div className="row mt-5  justisfy-content-around">
          <div className="col-md-6">
            <h4>Past Vacations</h4>
            {this.state.pastVaca.map(items => (
              < VacationBtn
                key={items.key}
                name={items.name}
                local={items.local}
              />
            ))}
          </div>
          <div className="col-md-6">
            <h4>Upcoming Vacations</h4>
            {this.state.upcomingVaca.map(items => (
              <VacationBtn
                key={items.key}
                name={items.name}
                local={items.local}
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
      </div>
    );
  }
}


export default Profile;
