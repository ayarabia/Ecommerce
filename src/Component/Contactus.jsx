import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Contactus.css";
import MapContainer from "./Map";
import ComponentStart from "../Common/ComponentStart";
function Contactus() {
  return (
    <div className="contact">
      <ComponentStart title="Contact Us"></ComponentStart>
      <div className="ourInfo">
        <Container>
          <div className="contactbox">
            <p>
              <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
          <div className="contactbox">
            <p>
              <span>Phone:</span>
              <a href="tel://1234567920"> +1235 2355 98</a>
            </p>
          </div>
          <div className="contactbox">
            <p>
              <span>Email: </span>
              <a href="mailto:info@yoursite.com"> info@yoursite.com</a>
            </p>
          </div>
          <div className="contactbox">
            <p>
              <span>Website:</span>
              <a href="https://colorlib.com"> yoursite.com</a>
            </p>
          </div>
        </Container>
      </div>
      <div className="location">
        <Container>
          <Row>
            <Col className="d-flex">
              <MapContainer></MapContainer>
            </Col>

            <Col sm={12} lg={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Supject" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  placeholder="Massage"
                >
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Massage
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contactus;
