import React from "react";
import ComponentStart from "../Common/ComponentStart";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "../Styles/SingelProduct.css";
import { connect } from "react-redux";
import { useState } from "react";
function SingelProduct() {
  const location = useLocation();
  const { data } = location.state;
  let [quntinty, setquntity] = useState(0);
  let increse = () => {
    setquntity(quntinty + 1);
  };
  let decrese = () => {
    if (quntinty > 0) {
      setquntity(quntinty - 1);
    }
  };
  console.log(data);
  return (
    <>
      <ComponentStart title="PRODUCTS"></ComponentStart>
      <Container>
        <Row>
          <Col>
            <img src={data.image} alt="" />
          </Col>
          <Col className="p-5">
            <h4>{data.title}</h4>
            <div className="rating">
              <p>
                {data.rating.rate}{" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faStar} />{" "}
                  <FontAwesomeIcon icon={faStar} />{" "}
                  <FontAwesomeIcon icon={faStar} />{" "}
                  <FontAwesomeIcon icon={faStar} />{" "}
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </p>
              <p>
                {data.rating.count} <span> kg available</span>
              </p>
            </div>
            <h4>${data.price}</h4>
            <p className="productdescription">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. Text should
              turn around and return to its own, safe country. But nothing the
              copy said could convince her and so it didn’t take long until.
            </p>

            <select name="size" id="size">
              <option value="volvo">SMALL</option>
              <option value="saab">MEDIUM</option>
              <option value="mercedes">LARGE</option>
              <option value="audi">EXTRA LARGE</option>
            </select>
            <div className="counter">
              <button onClick={increse}>+</button>
              <span>{quntinty}</span>
              <button onClick={decrese}>-</button>
            </div>
            <Button>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
// let mapStateToPropes = (state) => {
//   console.log(state);
//   return {
//     counter: state.counter,
//   };
// };
// let mapDispatchToProps = (dispatch) => {
//   return {
//     increse: () => dispatch({ type: "INCRESE" }),
//     decrese: () => dispatch({ type: "DECRESE" }),
//   };
// };
// export default connect(mapStateToPropes, mapDispatchToProps)(SingelProduct);
export default SingelProduct;
