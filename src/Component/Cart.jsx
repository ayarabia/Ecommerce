import React from "react";
import ComponentStart from "../Common/ComponentStart";
import { Container, Table } from "react-bootstrap";
import "../Styles/Cart.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
    //console.log(productadd);
    setmycart(productadd);
  };

  const removeFromCart = (index) =>
    setmycart((mycart) => mycart.filter((_, i) => i !== index));

  let totalprice = (e ,item) => {
  item.quantity=+e.target.value
    console.log(item);
    if(item.quantity>1){
    setTotal(item.quantity)
    }else{
      setTotal(1)
    }

  };
  useEffect(() => {
    addToCart();
  }, []);

  return (
 <>
 <ComponentStart title="My CART"></ComponentStart>
 <Container>
  {mycart.length > 0 ? 
     <div className="cart p-5">
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
                <div role="button">
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
                  min="1"
                  className="rounded  border border-gray-300 px-2"
                  placeholder="Enter Quentity"
                  onChange={(e) => {
                   totalprice(e ,item);
              }}
                />
              </td>
              <td>
                {total> 1? <p>${item.quantity * item.price }</p>:<p>${item.price }</p>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
</div>: 
<div className=" emptyCart py-5 d-flex align-items-center justify-content-center  flex-column">
          <p className="fs-2">Cart is empty</p>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span className="ms-2 fs-5">Start Shoping</span>
          </Link>
        </div>}
        </Container>
 </>
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
    decrese: () => dispatch({ type: "DECRESE" }),
  };
};

export default connect(mapStateToPropes, mapDispatchToProps)(Cart);
