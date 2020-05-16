import React from "react";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import "./style.css";

class Register extends React.Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    if(!e.target.checkValidity()) {

      return;
    }
      API.createUser({
        body: data,
      }).catch(err => console.log(err));

  }
  render() {

    return (
      <Wrapper>
        <Row>

          <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
          {/* {action matches path} */}
          <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" className="form-control" placeholder="Username" name="user" required />
            </div>
            <div className="form-group">
              <label htmlFor="Email1">Email address</label>
              <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" required/>
            </div>
            <div className="form-group">
              <label htmlFor="confPassword">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Re-enter Password" name="password2" />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </Row>
      </Wrapper>  
    );
  }
}

export default Register;