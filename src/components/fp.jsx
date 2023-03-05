import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Foodp = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x500" fluid />
        </Col>
        <Col md={6}>
          <h2>Product Name</h2>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere aliquet augue, vel commodo metus
            bibendum vitae.
          </p>
          <h3 className="mb-3">Price: $100</h3>
          <Button variant="primary" className="mb-3">
            Add to Cart
          </Button>
          <hr />
          <h4>Product Details:</h4>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Foodp;