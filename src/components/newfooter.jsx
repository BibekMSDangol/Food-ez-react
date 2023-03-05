import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewFooter = () => {
  return (
    <footer className="bg-dark py-3">
      <Container>
        <Row>
          <Col md={5}>
            <p class="text-white"> About Us</p>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>
          <Col md={4}>
            <p class="text-white"> About Us</p>
            <p class="text-white">Kathmandu, Nepal</p>
            <p class="text-white">Phone: 9800000000</p>
            <p class="text-white">Email: email@gmail.com</p>
          </Col>
          <Col md={3}>
            <p class="text-white"> About Us</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 My Company, Inc. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NewFooter;
