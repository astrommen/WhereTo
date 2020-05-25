import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {Wrapper, Title, White, Label, Button} from "../Styled";
import {Container, Row, Col} from "../Grid";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to profile when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <Wrapper>
      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i class="fas fa-arrow-left"></i>  Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Title>
                <b>Login</b> below
              </Title>
              <White className="grey-text text-darken-1">
                Don't have an account?  <Link to="/register"><b><i class="fas fa-user-plus"></i> Register</b></Link>
              </White>
            </div>
            
            <form noValidate onSubmit={this.onSubmit}>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="@gmail.com"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <Label style={{marginLeft: 5}} htmlFor="email">  Email</Label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <Label style={{marginLeft: 5}} htmlFor="password">  Password</Label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button

                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
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
LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(LogIn);
