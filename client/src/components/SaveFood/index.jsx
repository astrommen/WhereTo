import React, { Component } from "react";
import { Container, Col, Row } from "../Grid";
import { Card } from 'react-bootstrap';
import "./style.css";
import { FlipBtn, LinkBtn, Title, TitleLanding } from "../Styled";
import { DeleteBtn } from "../Buttons";
import ReactCardFlip from 'react-card-flip';

class SaveFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   console.log('card ' ,this.props)
  // }


  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    // console.log(this.props)
    return (
      <div className='mx-3 mb-4'>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront="1" flipSpeedFrontToBack="1">
          <div className='d-flex card text-center mt-2'>
            <Card.Img variant="top" src={this.props.image} height="158px" alt="event logo" />
            <Row>
              <TitleLanding><i className="fas fa-utensils"></i> {this.props.name}</TitleLanding>
            </Row>
            <div className="overflow">
            </div>
            <div className="row mt-auto">
              <p className="card-text text-secondary">
                {this.props.street}<br />
                {this.props.city}, {this.props.state} {this.props.zip}
              </p>
            </div>
            <div className="d-flex justify-content-around align-items-end my-2">
              <LinkBtn><a target="_blank" href={this.props.link}><i className="fas fa-link"></i></a></LinkBtn>
              <DeleteBtn onClick={() => this.props.deleteFood(this.props.id)}></DeleteBtn>
              {/* <FlipBtn onClick={this.handleClick} ><i className="fas fa-chevron-right"></i></FlipBtn> */}
            </div>
          </div>

          <div className='card text-center mt-2'>
            <div className="overflow">
            </div>
            <Row className="card-body text-dark">
              <p className="card-text text-secondary">
                Back of Card
            </p>
            </Row>
            <div className="d-flex justify-content-end">
              <FlipBtn onClick={this.handleClick}><i className="fas fa-chevron-right"></i></FlipBtn>
            </div>
          </div>

        </ReactCardFlip>
      </div>
    );
  }
}

export default SaveFood;
