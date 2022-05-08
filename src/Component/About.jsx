import React from "react";
import "../Styles/About.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ComponentStart from "../Common/ComponentStart";

function About() {
  return (
    <div className="about">
      <ComponentStart title="ABOUT US"></ComponentStart>
      <Container>
        <Row>
          <Col xs={12} md={5} className="vidio">
            <a href="https://vimeo.com/45830194">
              <FontAwesomeIcon icon="fastar" />
              {/* <FontAwesomeIcon icon={faPlay} /> */}
            </a>
          </Col>
          <Col xs={12} md={7} className="aboutdescription">
            <h2>Welcome to Vegefoods an eCommerce website</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her, made her
              drunk with Longe and Parole and dragged her into their agency,
              where they abused her for their.
            </p>
            <Button>Shop now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
