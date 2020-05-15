import { Container, Row, Col } from "../Grid";
import { SiteBtn, SeatmapBtn, SaveBtn} from "../Buttons"
import "./style.css";
import styled from "styled-components";

const Image = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`
const ImgDes = styled.p `
font-style: italic;
text-align: center;`

function TicketmasterCard(props) {
  return(
    <Container>
      <Row>
        <Col size="md-6">
          <h3>{props.name}</h3>
        </Col>
        <Col size="md-6">
          <SiteBtn href={props.url}> Event Site </SiteBtn>
          <SaveBtn onClick={() => this.saveEvent(activity)} />
        </Col>
      </Row>
      <Row>
        <Col size="md-5">
          <Image src={props.image} alt={props.name} />

        </Col>
      </Row>
    </Container>
  )
}

export default TicketmasterCard;
