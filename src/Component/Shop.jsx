import React from "react";
import "../Styles/Shop.css";
import ComponentStart from "../Common/ComponentStart";
import { Container, ListGroup ,Col,Row} from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import getProduct from "../Redux/Action/ProductesAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Subcribe from "../Component/Subcribe";
function Shop(props) {
  let { productes, fetchProductes, increse } = props;

  let [ourProduct, setOurProduct] = useState(productes);
  // console.log( props );

  let filter = (type) => {
    var newArray = [];
    for (let i = 0; i < productes.slice(0, 10).length; i++) {
      console.log(type);
      if (productes[i].category === type) {
        newArray.push(productes[i]);
      }
      if (type === "all") {
        newArray = productes;
      }
    }
    setOurProduct(newArray);
    console.log(newArray);
  };
  useEffect(() => {
    fetchProductes();
  }, []);

  return (
    <div className="shop">
      <ComponentStart title=" PRODUCTS"></ComponentStart>
      <Container>
        <div className="filter">
          <ListGroup horizontal>
            <ListGroup.Item
              onClick={() => {
                filter("all");
              }}
            >
              {" "}
              All
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                filter("Vegetables");
              }}
            >
              Vegetables
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                filter("Fruits");
              }}
            >
              Fruits
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                filter(" JUICE");
              }}
            >
              Juices
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => {
                filter("Dried");
              }}
            >
              Dried
            </ListGroup.Item>
          </ListGroup>
        </div>
 </Container>
 <Container>
 <Row className="parantdiv">
          {ourProduct.slice(0, 10) &&
            ourProduct.slice(0, 10).map((item, index) => {
              return (
                <Col sm={12} md={6} lg={3}  key={index} onClick={(item) => {}}>
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
                </Col>
              );
            })}
        </Row>
 </Container>

      <Subcribe></Subcribe>
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
export default connect(mapStateToPropes, mapDispatchToProps)(Shop);
