import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
function Header(props) {
  let { counter } = props;
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">VEGEFOODS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>

              <NavDropdown title="Shop" id="basic-nav-dropdown">
                {/* <Link to="/singelProduct">Singel Product</Link> */}
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">CheckOut</Link>
                <Link to="/wishlist">WishList</Link>

                <Link to="/shop">Shop</Link>
              </NavDropdown>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cart">
                <div>
                  <FontAwesomeIcon icon={faCartArrowDown} />[ {counter} ]
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
let mapStateToPropes = (state) => {
  console.log(state);
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToPropes)(Header);
