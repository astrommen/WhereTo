// import React from "react";
// import Wrapper from "../Wrapper";
// import API from "../../utils/API";
// import { Container, Row, Col } from "../Grid";
// import "./style.css";

// class Register extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//         name: "",
//         email: "",
//         password: "",
//         password2: "",
//         errors: {}
//     };
//   }

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   }

//   onSubmit = e => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     if(!e.target.checkValidity()) {

//       return;
//     }
//     //   API.createUser({
//     //     body: data,
//     //   }).catch(err => console.log(err));

//     const newUser = {
//     name: this.state.name,
//     email: this.state.email,
//     password: this.state.password,
//     password2: this.state.password2
//     };
//   }
  

//   render() {

//     return (
//       <Wrapper>
//         <Row>

//           <img className="logo" src={process.env.PUBLIC_URL + '/WhereToLogo.png'} alt="logo" />
//           {/* {action matches path} */}
//           <form onSubmit={this.onSubmit} noValidate>
//           <div className="form-group">
//               <label htmlFor="Name">Name</label>
//               <input type="text" className="form-control" placeholder="Name" name="name" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Username">Username</label>
//               <input type="text" className="form-control" placeholder="Username" name="user" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Email1">Email address</label>
//               <input type="email" className="form-control" placeholder="Email" name="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="Password">Password</label>
//               <input type="password" className="form-control" placeholder="Password" name="password" required/>
//             </div>
//             <div className="form-group">
//               <label htmlFor="confPassword">Confirm Password</label>
//               <input type="password" className="form-control" placeholder="Re-enter Password" name="password2" />
//             </div>
//             <button type="submit" className="btn btn-primary" >Submit</button>
//           </form>
//         </Row>
//       </Wrapper>  
//     );
//   }
// }

// export default Register;

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import {Wrapper, Title, White, Label, Button} from "../Styled";
import {Container, Row, Col} from "../Grid";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <Wrapper>
      <Container>
        <Row>
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
            <i class="fas fa-arrow-left"></i>  Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Title>
                <b>Register</b> below
              </Title>
              <White className="grey-text text-darken-1">
                Already have an account?  <Link to="/login"><i class="fas fa-sign-in-alt"></i> Log in</Link>
              </White>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <Label style={{marginLeft: 5}} htmlFor="name">Name</Label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <Label style={{marginLeft: 5}}  htmlFor="email">Email</Label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <Label style={{marginLeft: 5}} htmlFor="password">Password</Label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <Label style={{marginLeft: 5}}  htmlFor="password2" >Confirm Password</Label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
      </Wrapper>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));