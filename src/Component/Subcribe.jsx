import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Styles/Subcribe.css";
function Subcribe() {
  return (
    <div className="subcribe">
      <Container>
       <Row>
       <Col sm={12} md={6} className="info">
          <h5>Subcribe to our Newsletter</h5>
          <p>Get e-mail updates about our latest shops and special offers</p>
        </Col>
        <Col  sm={12} md={6}  className="userInput">
          <input type="email" placeholder="Enter email addres"></input>
          <button>Subscribe</button>
        </Col>
       </Row>

      </Container>
    </div>
  );
}

export default Subcribe;
