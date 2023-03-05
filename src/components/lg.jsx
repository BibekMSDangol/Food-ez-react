import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userSerivice from "../services/userService";
import { useNavigate } from "react-router-dom";

const Lg = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(`Email: ${email}, Password: ${password}`);
  //   };
  const handleLogin = (e) => {
    e.preventDefault();
    userSerivice
      .LoginUser(username, password)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.token);
        window.alert("Logged In");
        let userData = response.data;
        console.log(userData);
        navigate("/food", { userData: userData });
      })
      .catch((err) => window.alert(err.response.data.message));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form >
        <h1 className="mb-4">Login</h1>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3 mb-4" onClick={handleLogin}>
          Login
        </Button>
        <span>Don't have an account? <u>Sign up </u></span>
      </Form>
    </Container>
  );
};

export default Lg;
