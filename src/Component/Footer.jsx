import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Container
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div className="arrow">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className=" mb-4 ms-0">Vegefoods</h6>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className=" mb-4">Menu</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Shop
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Journal
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="mb-4">Help</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Shipping Information
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Returns & Exchange
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className=" mb-4">Have a Questions?</h6>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p>+2 392 3929 210</p>
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          Copyright ©2022 All rights reserved | This template is made with
          &nbsp;
          <FontAwesomeIcon icon={faHeart} className="loveicon" /> by &nbsp;
          <a
            className="text-reset fw-bold  colorlib"
            href="https://Colorlib.com/"
          >
            Colorlib
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
