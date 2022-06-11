import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialCard from "./TestimonialCard";
const options = {
  margin: 30,
  responsiveClass: true,
  // nav: true,
  autoplay: false,

 smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
function OwlCarsoul() {
  return (
    <div>
      <div class="container-fluid">
        <OwlCarousel
          items={3}
          className="owl-theme"
          {...options}
          loop
          margin={8}
        >
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>

          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default OwlCarsoul;
