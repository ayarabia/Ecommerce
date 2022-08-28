import React, { useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getProduct from "../Redux/Action/ProductesAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faHeart,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Products.css";
function Products(props) {
  let { productes, fetchProductes, increse } = props;
  // console.log(productes);

  useEffect(() => {
    fetchProductes();
  }, []);

  return (
    <div className="productes">
      <Container>
        <p>Featured Products</p>
        <h1>Our Products</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <Row className="parantdiv">
          {productes.slice(0, 8) &&
            productes.slice(0, 8).map((item, index) => {
              return (
                <Col sm={12} md={6} lg={3} key={index} onClick={(item) => {}}>
                  <div className="box">
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                  <span>${item.price}</span>
                  <div className="icons">
                    <Link to="/singelProduct" state={{ data: item }}>
                      <div>
                        <FontAwesomeIcon icon={faBars} />
                      </div>
                    </Link>
                    <div
                      role="button"
                      onClick={() => {
                        increse();
                        item.added = true;
                        console.log(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faCartArrowDown} />
                    </div>
                    <div
                      role="button"
                      onClick={() => {
                        increse();
                        item.loved = true;
                        console.log(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

let mapStateToPropes = (state) => {
  // console.log(state);
  return {
    productes: state.products,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    fetchProductes: () => dispatch(getProduct()),
    increse: () => dispatch({ type: "INCRESE" }),
  };
};
export default connect(mapStateToPropes, mapDispatchToProps)(Products);