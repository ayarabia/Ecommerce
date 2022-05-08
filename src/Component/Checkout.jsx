import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ComponentStart from "../Common/ComponentStart";
import "../Styles/Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <ComponentStart title="CHECKOUT"></ComponentStart>
      <Container>
        <Row>
          <h4>Billing Details</h4>

          <Col sm={12} md={6}>
            <Form>
              <div className="name">
                <div className="col-md-5">
                  <label>Firt Name</label> <br></br>
                  <input type="text" />
                </div>
                <div className="col-md-5 ">
                  <label>Last Name</label> <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="country">
                <label>State / Country</label>
                <br></br>
                <select name="country" id="country">
                  <option value="france">France</option>
                  <option value="japan">Japan</option>
                  <option value="italy">Italy</option>
                  <option value="egypt">Egypt</option>
                  <option value="libia">Libia</option>
                </select>
              </div>
              <div>
                <label>Street Address</label>
                <br></br>
                <div className="name">
                  <div className="col-md-5 ">
                    <input type="text" />
                  </div>
                  <div className="col-md-5 ">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="name">
                <div className="col-md-5 ">
                  <label>Town / City</label> <br></br>
                  <input type="text" />
                </div>
                <div className="col-md-5 ">
                  <label>Postcode / ZIP *</label> <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="name">
                <div className="col-md-5 ">
                  <label>Phone</label> <br></br>
                  <input type="text" />
                </div>
                <div className="col-md-5 ">
                  <label>Email Address</label> <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="my-4">
                <Form.Check
                  inline
                  label="Create an Account?"
                  name="group1"
                  type="radio"
                />
                <Form.Check
                  inline
                  label="Ship to different address"
                  name="group1"
                  type="radio"
                />
              </div>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <div className="cartTotal">
              <h4>Cart Total</h4>
              <p>
                <span>Subtotal</span>
                <span>$20.60</span>
              </p>
              <p>
                <span>Delivery</span>
                <span>$0.00</span>
              </p>
              <p>
                <span>Discount</span>
                <span>$3.00</span>
              </p>
              <hr />
              <p>
                <span>TOTAL</span>
                <span>$17.60</span>
              </p>
            </div>
            <div className="paymentMethod">
              <h3>Payment Method</h3>
              <div className="my-4">
                <Form.Check
                  label=" Direct Bank Tranfer"
                  name="payment"
                  type="radio"
                />
                <Form.Check label="Check Payment" name="payment" type="radio" />
                <Form.Check label="Paypal" name="payment" type="radio" />
                <Form.Check
                  label="I have read and accept the terms and conditions"
                  name="payment"
                  type="checkbox"
                />
              </div>

              <a href="#" class="btn btn-primary my-4">
                Place an order
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
