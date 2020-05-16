import React from "react";
import Wrapper from "../Wrapper";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Register() {



  return (
    <Wrapper>
      <Row>

        <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
        {/* {action matches path} */}
        <form method="post" action="/api/user">
        <div class="form-group">
            <label for="Name">Name</label>
            <input type="text" class="form-control" placeholder="Name" name="name" />
          </div>
          <div class="form-group">
            <label for="Username">Username</label>
            <input type="text" class="form-control" placeholder="Username" name="user" />
          </div>
          <div class="form-group">
            <label for="Email1">Email address</label>
            <input type="email" class="form-control" placeholder="Email" name="email" />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" />
          </div>
          <div class="form-group">
            <label for="confPassword">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Re-enter Password" name="password2" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </Row>
    </Wrapper>  
  );
}

export default Register;