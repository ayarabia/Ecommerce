import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col } from "react-bootstrap";
import "../Styles/BlogCard.css";

function BlogCard() {
  return (
    <div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog1.webp")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a href="#">Read more</a>
        </div>
      </div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog2.webp")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a href="#">Read more</a>
        </div>
      </div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog3.jpg")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a>Read more</a>
        </div>
      </div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog4.webp")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a href="#">Read more</a>
        </div>
      </div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog5.webp")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a href="#">Read more</a>
        </div>
      </div>
      <div className="order">
        <div className="orderImage">
          <img src={require("../Image/blog6.webp")} alt="" />
        </div>
        <div className="orderdescription">
          <span>
            July 20, 2019 Admin{" "}
            <span className="message">
              <FontAwesomeIcon icon={faMessage} /> 3
            </span>{" "}
          </span>
          <h6>
            Even the all-powerful Pointing has no control about the blind texts
          </h6>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
