import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/ComponentStart.css";
function ComponentStart(props) {
  return (
    <div className="componentImage">
      {/* <div className="overlay"></div> */}
      <Container>
        <h1>{props.title}</h1>
      </Container>
    </div>
  );
}

export default ComponentStart;
