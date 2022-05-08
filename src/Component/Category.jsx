import React from "react";
import { Container, Button } from "react-bootstrap";
import "../Styles/Category.css";
function Category() {
  return (
    <div className="category">
      <Container>
        <div className="box">
          <img src={require("../Image/category-2.webp")} />
          <p className="type">Vegetables</p>
        </div>
        <div className="text">
          <p>Vegetables</p>
          <p>Protect the health of every home</p>
          <Button>Shop now</Button>
        </div>
        <div className="box">
          <img src={require("../Image/category-4.jpg")} />
          <p className="type">Juices</p>
        </div>
        <div className="box">
          <img src={require("../Image/category-3.webp")} />
          <p className="type">Fruits</p>
        </div>
        <div className="box">
          <img src={require("../Image/category-6.jpg")} />
        </div>
        <div className="box">
          <img src={require("../Image/category-5.webp")} />
          <p className="type">Dried</p>
        </div>
      </Container>
    </div>
  );
}

export default Category;
