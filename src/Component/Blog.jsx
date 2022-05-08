import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../Common/BlogCard";
import "../Styles/Blog.css";
import BlogSearch from "./BlogSearch";
import ComponentStart from "../Common/ComponentStart";
function Blog() {
  return (
    <div className="blog">
      {/* <div className="blogImage">
   
        <Container>
          <h1>Blog</h1>
        </Container>
      </div> */}
      <ComponentStart title="BLOG"></ComponentStart>
      <Container>
        <Row className="p-5">
          <Col xs={12} md={8}>
            <BlogCard></BlogCard>
          </Col>
          <Col xs={12} md={4}>
            <BlogSearch></BlogSearch>
            <div>
              <h6>Tag Cloud</h6>
              <div className="tags">
                <a href="">Fruits</a>
                <a href="">Tomato</a>
                <a href="">Mango</a>
                <a href="">Appel</a>
                <a href="">Carrots</a>
                <a href="">Orange</a>
                <a href="">Pepper</a>
                <a href="">Eggplant</a>
              </div>
            </div>
            <div className="Paragraph">
              <h6>Paragraph</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
