import React from "react";
import { Container } from "react-bootstrap";
import OwlCarsoul from "../Common/OwlCarsoul";
import "../Styles/Testimony.css";
function Testimony() {
  return (
    <div className="testimony">
      <Container>
        <span>Testimony</span>
        <h1>Our satisfied customer says</h1>
        <p className="titel">
          Far far away, behind the word mountains, far from the countries
          Vokalia and <br></br> Consonantia, there live the blind texts.
          Separated they live in
        </p>
        <OwlCarsoul></OwlCarsoul>
      </Container>
    </div>
  );
}

export default Testimony;
