import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Services.css";
function Services() {
  return (
    <div className="services">
      <Container>
        <div>
          <img src={require("../Image/microsoft.webp")} />
        </div>
        <div>
          <img src={require("../Image/android.webp")} />
        </div>
        <div>
          <img src={require("../Image/java.webp")} />
        </div>
        <div>
          <img src={require("../Image/googel.webp")} />
        </div>

        <div>
          <img src={require("../Image/adop.webp")} />
        </div>
      </Container>
    </div>
  );
}

export default Services;
