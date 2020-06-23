import React, { Component, useState } from "react";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "../Styled";
import "./style.css";
import API from "../../utils/API";
import axios from "axios";
import jwt_decode from "jwt-decode";
const token = (window.localStorage.getItem("jwtToken"));

const decoded = jwt_decode(token);

const user = decoded.id;

const endpoint = "http://localhost:3000/api/profilepics/upload";

let visible = false;
// const [visible, setVisible] = useState(false);

class profileBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      showButton: "hidden",
      // imageUrl: "https://via.placeholder.com/100"
    };
  }


  handleSelectedFile = e => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
      showButton: "visible"
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile);
    const url = "http://where-to-profile-pics.s3-website-us-east-1.amazonaws.com/" 
    + this.state.selectedFile.name;
    console.log(url);

    this.props.history.push("/profile");

    axios
      .post(endpoint, data)
      .then(() => {
        this.setState({imageUrl: url})
        
        API.uploadImage(user, {profile_pic: url}).then(data => 
          //reloads page after upload
          window.location.reload()
          // console.log("uploading image to db", data.data.profile_pic),
        ).catch(error => {
          console.log("message", error);
        })
      })
      .catch(error => {
        alert("Oops some error happened, please try again");
        console.log("messgae", error);
      });

      // this.props.history.push("/profile");
    };

  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };




  render() {
    const { selectedFile } = this.state;

    return (
      <div>
        <div className="media">
          <img src={this.props.profile_pic} className="align-self-center mr-3 profile-pic" alt="..." />
          <div className="media-body">
            <Title className="mt-0">Welcome back {this.props.name}</Title>
          </div>
        </div>
        <form onSubmit={this.handleUpload}>
        <div className="form-group">
            <input
              type="file"
              name=""
              id="prof-pic"
              onChange={this.handleSelectedFile}
            />
          </div>
           <button type="submit" class="btn btn-primary btn-block picSubmit" style={{visibility: this.state.showButton}}>
            Upload
          </button>
        </form>
      </div>
    );
  }
}

// LogOut code
profileBox.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(profileBox);



