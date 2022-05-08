import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
function TestimonialCard() {
  return (
    <div className="mycard">
      <div className="person">
        <div className="cardimage">
          <img src={require("../Image/testmonial.webp")} alt="" />
          <div className="quoteIcon">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
        </div>
      </div>
      <p className="description">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
        <span></span>
      </p>
      <h5>Garreth Smith</h5>
      <p className="lastitem">System Analyst</p>
    </div>
  );
}

export default TestimonialCard;
