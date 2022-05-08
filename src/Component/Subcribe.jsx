import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Subcribe.css";
function Subcribe() {
  return (
    <div className="subcribe">
      <Container>
        <div className="info">
          <h5>Subcribe to our Newsletter</h5>
          <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className="userInput">
          <input type="email" placeholder="Enter email addres"></input>
          <button>Subscribe</button>
        </div>
      </Container>
    </div>
  );
}

export default Subcribe;
