import React, { Component } from "react";
import { Container, Col, Row } from "../Grid";
import { Card } from 'react-bootstrap';
import "./style.css";
import { FlipBtn, LinkBtn, Title } from "../Styled";
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
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront="1" flipSpeedFrontToBack="1">
        <div className='card text-center mt-2'>
          <Card.Img variant="top" src={this.props.image} alt="location image" />
          <Row>
            <Title><i className="fas fa-ticket-alt"></i> {this.props.name}</Title>
          </Row>
          <div className="overflow">
          </div>
          <Row className="card-body text-dark">
            <p className="card-text text-secondary">
              {this.props.rating}/5 of {this.props.reviews} reviews
            </p>
          </Row>
          <div className="d-flex justify-content-end align-items-end">
              <FlipBtn onClick={this.handleClick} ><i className="fas fa-chevron-right"></i></FlipBtn>
              <LinkBtn><a target="_blank" href="https://fontawesome.com/icons"><i className="fas fa-link"></i></a></LinkBtn>
              <DeleteBtn onClick={() => this.props.deleteFood (this.props.id)}></DeleteBtn>
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
    );
  }
}

export default SaveFood;
