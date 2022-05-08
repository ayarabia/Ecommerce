import React from "react";
import ComponentStart from "../Common/ComponentStart";
import { Container, Table } from "react-bootstrap";
import "../Styles/Cart.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  let { productes, decrese } = props;
  let [mycart, setmycart] = useState([]);
  let [total, setTotal] = useState(1);
  let addToCart = () => {
    let productadd = [];
    for (let i = 0; i < productes.length; i++) {
      if (productes[i].added === true) {
        productadd.push(productes[i]);
      }
    }
    setmycart(productadd);
  };

  const removeFromCart = (index) =>
    setmycart((mycart) => mycart.filter((_, i) => i !== index));

  let totalprice = (e) => {
    console.log(e.target.value);
    console.log(total);
    if (e.target.value >= 1) {
      setTotal(e.target.value);
    } else {
      setTotal(0);
    }
  };
  useEffect(() => {
    addToCart();
  }, []);

  return (
    <div className="cart">
      <ComponentStart title="My CART"></ComponentStart>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {mycart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => {
                          decrese();
                          removeFromCart(index);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    {" "}
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <p>{item.title}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Enter Quentity"
                      onChange={(e) => {
                        totalprice(e);
                      }}
                    />
                  </td>
                  <td>
                    <p> $ {total * item.price}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
let mapStateToPropes = (state) => {
  console.log(state);
  return {
    productes: state.products,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    decrese: () => dispatch({ type: "DECRESE" }),
  };
};

export default connect(mapStateToPropes, mapDispatchToProps)(Cart);
