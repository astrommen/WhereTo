import React from "react";
import Wrapper from "../Wrapper";
import { Container, Row, Col } from "../Grid";

function Register() {



    return (
      <Wrapper>
        <Row>

          <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
          Register your email, password, and zipcode
        </Row>
        
        
      </Wrapper>
    )

}

export default Register;