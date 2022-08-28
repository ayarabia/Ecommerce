import React from "react";
import { Container ,Col,Row} from "react-bootstrap";
import "../Styles/Services.css";
function Services() {
  return (
    <div className="services">
      <Container>
    <Row>
    <Col sm>
          <img src={require("../Image/microsoft.webp")} />
        </Col>
        <Col sm>
          <img src={require("../Image/android.webp")} />
        </Col>
        <Col sm>
          <img src={require("../Image/java.webp")} />
        </Col>
        <Col sm>
          <img src={require("../Image/googel.webp")} />
        </Col>

        <Col sm>
          <img src={require("../Image/adop.webp")} />
        </Col>
    </Row>
      </Container>
    </div>
  );
}

export default Services;
