import { useEffect, useState } from "react";
import userService from "../services/userService";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBRadio,
//   MDBSelect,
// } from "mdb-react-ui-kit";
import "./regg.css";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="register">
      <h1 className="h1">Registration</h1>
      <Form onSubmit={handleRegister} className="form">
        <div className="wrap">
          <div className="f1">
            <FormGroup>
              <Label for="First Name" className="label">
                Fisrt Name
              </Label>
              <Input
                className="input"
                id="fname"
                name="fname"
                placeholder="Enter your First Name"
                type="text"
                value={fname}
                onChange={(event) => setFname(event.target.value)}
              />
              <FormFeedback>
                "Username should be longer then 5 characters"
              </FormFeedback>
            </FormGroup>
          </div>
          <div className="f2">
            <FormGroup>
              <Label for="Last Name" className="label">
                Last Name
              </Label>
              <Input
                className="input"
                id="lname"
                name="lname"
                placeholder="Enter your Last Name"
                type="text"
                value={lname}
                onChange={(event) => setLname(event.target.value)}
              />
              <FormFeedback>
                "Username should be longer then 5 characters"
              </FormFeedback>
            </FormGroup>
          </div>
        </div>
        <div className="wrap1">
          <div className="f1">
            <FormGroup>
              <Label for="username" className="label">
                Username
              </Label>
              <Input
                className="input"
                invalid={usernamelen}
                id="username"
                name="username"
                placeholder="Enter your Username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <FormFeedback>
                "Username should be longer then 5 characters"
              </FormFeedback>
            </FormGroup>
          </div>
          <div className="f2">
            <FormGroup>
              <Label for="contact" className="label">
                Contact
              </Label>
              <Input
                className="input"
                invalid={contactlen}
                id="contact"
                name="contact"
                placeholder="Enter your Contact"
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
              <FormFeedback>"Contact should be 10 digits"</FormFeedback>
            </FormGroup>
          </div>
        </div>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <FormFeedback>
            "Username should be longer then 5 characters"
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter a password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            invalid={status}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <FormFeedback invalid>"Passwords dont match"</FormFeedback>
        </FormGroup>

        <Button color="success">Register</Button>
      </Form>
    </div>
  );
};

export default Register;
