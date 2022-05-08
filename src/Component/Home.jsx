import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../Styles/Home.css";
import Features from "./Features";

import Category from "./Category";
import Products from "./Products";
import Price from "./Price";
import Testimony from "./Testimony";
import TestimonialCard from "../Common/TestimonialCard";
import Services from "./Services";
import Subcribe from "./Subcribe";

function Home() {
  return (
    <>
      <div className="slider">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Image/1.webp")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>100% Fresh &amp; Organic Foods</h1>
              <p>We deliver organic vegetables &amp; fruits.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Image/2.webp")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>100% Fresh &amp; Organic Foods</h1>
              <p>We deliver organic vegetables &amp; fruits.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Features></Features>
      <Category></Category>
      <Products></Products>
      <Price></Price>

      <Testimony></Testimony>
      <Services></Services>
      <Subcribe></Subcribe>
    </>
  );
}

export default Home;
