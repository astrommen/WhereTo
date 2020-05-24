import React, { Component } from 'react';
import Nav from "../components/Nav"
import {Title, Wrapper} from "../components/Styled";

class DayTrip extends Component {
  constructor(props) {
    super(props)

  }

  state = this.props.state

  componentDidMount() {
    // this.redirect()
  }

  redirect = () => {
    if (!this.props.state.tripName) {
      this.props.history.push("/dayform")
    }
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        <Title>Start Compiling your Day Trip</Title>
      </Wrapper>
    );
  }
}

export default withRouter(DayTrip);