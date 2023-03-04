import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import userSerivice from "../services/userService";

// import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

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
      })
      .catch((err) => window.alert(err.response.data.message));
  };
  return (
    <>

      <Form className="form">
      <div>
        <h1>Login Form</h1>
      </div>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            className="wrap"
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
