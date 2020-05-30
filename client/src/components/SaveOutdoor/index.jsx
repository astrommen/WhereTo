import React, { Component } from "react";
import { Container, Col, Row } from "../Grid";
import { Card } from 'react-bootstrap';
import "./style.css";
import { FlipBtn, LinkBtn, Title } from "../Styled";
import { DeleteBtn } from "../Buttons";
import ReactCardFlip from 'react-card-flip';

class SaveOutdoor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    // console.log(this.props)
    return (
      <div className='mx-3 mb-4'>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" >
          <div className='card mt-2'>
            <Card.Img variant="top" src={this.props.images[0] ? this.props.images[0].URL : "./img/location/noImage.png"} height="158px" alt="event logo" />
            <Row>
              <Title><i className="fas fa-hiking"></i> {this.props.name}</Title>
            </Row>
            <div className="overflow">
            </div>
            <div className="row mt-auto">
              <p className="card-text text-secondary">
                Flip card for description
              </p>
            </div>
            <div className="d-flex justify-content-around align-items-end mx-4 my-2">
              <LinkBtn><a target="_blank" href={this.props.link}><i className="fas fa-link"></i></a></LinkBtn>
              <DeleteBtn onClick={() => this.props.deleteOutdoor(this.props.id)}></DeleteBtn>
              <FlipBtn onClick={this.handleClick}><i className="fas fa-chevron-right"></i></FlipBtn>
            </div>
          </div>

          <div className='card text-center mt-2'>
            <div className="overflow">
            </div>
            <div className="row text-dark overflow-auto w-auto mx-1">
              <p className="card-text text-secondary">
                {this.props.description}
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <FlipBtn onClick={this.handleClick}><i className="fas fa-chevron-right"></i></FlipBtn>
            </div>
          </div>

        </ReactCardFlip>
      </div>
    );
  }
}

export default SaveOutdoor;
