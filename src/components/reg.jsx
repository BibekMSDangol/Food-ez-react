import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FormFeedback, Input } from "reactstrap";
import userService from "../services/userService";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [usernamelen, setUsernameLength] = useState(false);
  const [contactlen, setContactLength] = useState(false);
  useEffect(() => {
    setStatus(password !== confirmPassword ? true : false);
  }, [confirmPassword, password]);
  useEffect(
    () => setUsernameLength(username.length < 5 ? true : false),
    [username]
  );
  useEffect(
    () => setContactLength(contact.length < 10 ? true : false),
    [contact]
  );

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(fname, lname, username, contact, email, password);
    userService
      .registerUser(fname, lname, username, contact, email, password)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-200">
        <Col md={6} className="d-none d-md-block bg-light">
          <img
            src="https://www.lacademie.com/wp-content/uploads/2022/04/asian-cuisines.jpg"
            alt="signup image"
            className="w-150 h-100 object-fit-contain"
          />
        </Col>
        <Col md={6} className="bg-light p-5">
          <h1 className="mb-4">Sign Up</h1>
          <Form onSubmit={handleRegister}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Input
                invalid={contactlen}
                type="text"
                placeholder="Enter email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <FormFeedback>"Contact should be 10 digits"</FormFeedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Input
                invalid={usernamelen}
                type="text"
                placeholder="Enter a username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <FormFeedback>
                "Username should be longer then 5 characters"
              </FormFeedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Input
                invalid={status}
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FormFeedback invalid>"Passwords dont match"</FormFeedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
