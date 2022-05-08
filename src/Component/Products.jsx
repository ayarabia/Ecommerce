import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
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
        <div className="parantdiv">
          {productes.slice(0, 8) &&
            productes.slice(0, 8).map((item, index) => {
              return (
                <div className="box" key={index} onClick={(item) => {}}>
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
                      onClick={() => {
                        increse();
                        item.added = true;
                        console.log(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faCartArrowDown} />
                    </div>
                    <div
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
              );
            })}
        </div>
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

// <div className="box">
// <img src={require("../Image/feat1.jpg")} alt="" />
// <p>BELL PEPPER</p>
// <span>$80.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat2.jpg")} alt="" />
// <p>STRAWBERRY</p>
// <span>$120.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat3.jpg")} alt="" />
// <p>GREEN BEANS</p>
// <span>$120.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat4.jpg")} alt="" />
// <p>PURPLE CABBAGE</p>
// <span>$80.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat5.jpg")} alt="" />
// <p>TOMATOE</p>
// <span>$80.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat6.jpg")} alt="" />
// <p>BROCOLLI</p>
// <span>$120.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat7.jpg")} alt="" />
// <p>CARROTS</p>
// <span>$120.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
// <div className="box">
// <img src={require("../Image/feat8.jpg")} alt="" />
// <p>FRUIT JUICE</p>
// <span>$120.00</span>
// <div className="icons">
//   <div>
//     <FontAwesomeIcon icon={faBars} />{" "}
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faCartArrowDown} />
//   </div>
//   <div>
//     <FontAwesomeIcon icon={faHeart} />{" "}
//   </div>
// </div>
// </div>
