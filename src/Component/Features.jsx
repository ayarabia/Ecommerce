import React from "react";
import { Container } from "react-bootstrap";
import "../Styles/Features.css";
function Features() {
  return (
    <div className="features">
      <Container>
        <div className="child">
          <div className="borderdiv1">
            <div className="image">
              <img src={require("../Image/shipped (1).png")} />
            </div>
          </div>
          <h4>FREE SHIPPING</h4>
          <p>ON ORDER OVER $100</p>
        </div>
        <div className="child">
          <div className="borderdiv2">
            <div className="image">
              <img src={require("../Image/diet.png")} alt="First slide" />
            </div>
          </div>
          <h4>ALWAYS FRESH</h4>
          <p>PRODUCT WELL PACKAGE</p>
        </div>
        <div className="child">
          <div className="borderdiv3">
            <div className="image">
              <img src={require("../Image/badge.png")} alt="First slide" />
            </div>
          </div>
          <h4>SUPERIOR QUALITY</h4>
          <p>QUALITY PRODUCTS</p>
        </div>
        <div className="child">
          <div className="borderdiv4">
            <div className="image">
              <img
                src={require("../Image/customer-service.png")}
                alt="First slide"
              />
            </div>
          </div>
          <h4>SUPPORT</h4>
          <p>24/7 SUPPORT</p>
        </div>
      </Container>
    </div>
  );
}

export default Features;
