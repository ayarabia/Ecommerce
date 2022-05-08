import React from "react";
import { Form, ListGroup, Badge } from "react-bootstrap";
import "../Styles/BlogSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
function BlogSearch() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Search..." />
        </Form.Group>
      </Form>
      <div>
        <h6>Categories</h6>
        <ListGroup>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">Vegetables</div>
            <span>(12)</span>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">Fruits</div>
            <span>(22)</span>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">Juice</div>
            <span>(37)</span>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">Dries</div>
            <span>(42)</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <h6>Recent Blog</h6>
        <div className="RecentBlog">
          <div className="RecentBlogImage">
            <img src={require("../Image/blog1.webp")} alt="" />
          </div>
          <div className="RecentBlogdescription">
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
            <span>
              July 20, 2019 Admin{" "}
              <span className="message">
                <FontAwesomeIcon icon={faMessage} /> 3
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="RecentBlog">
          <div className="RecentBlogImage">
            <img src={require("../Image/blog2.webp")} alt="" />
          </div>
          <div className="RecentBlogdescription">
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
            <span>
              July 20, 2019 Admin{" "}
              <span className="message">
                <FontAwesomeIcon icon={faMessage} /> 3
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="RecentBlog">
          <div className="RecentBlogImage">
            <img src={require("../Image/blog3.jpg")} alt="" />
          </div>
          <div className="RecentBlogdescription">
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts
            </p>
            <span>
              July 20, 2019 Admin{" "}
              <span className="message">
                <FontAwesomeIcon icon={faMessage} /> 3
              </span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSearch;
