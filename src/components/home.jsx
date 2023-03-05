import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start bg-primary text-white p-5">
          <h1 className="display-4 mb-4">Welcome to Our Website</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere aliquet augue, vel commodo metus
            bibendum vitae. Praesent commodo, sapien vel aliquet commodo, lorem odio lacinia ipsum, at commodo quam
            diam sit amet mi.
          </p>
          <Button variant="light" className="mt-3">
            Learn More
          </Button>
        </Col>
        <Col md={6} className="bg-white p-5">
          <h1 className="mb-4">Sign Up</h1>
          <p className="lead mb-4">
            Create an account to get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere
            aliquet augue, vel commodo metus bibendum vitae.
          </p>
          <Button variant="primary" className="w-100 mt-3">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
