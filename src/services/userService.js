import axios from "axios";
const baseUrl = "http://localhost:3000/user ";
const LoginURL = "http://localhost:3000/user/login";

const registerUser = async (fname, lname, username, contact, email, password) => {
  return await axios.post(`${baseUrl}/register`, {
    fname,
    lname,
    username,
    contact,
    email,
    password,
  });
};

const LoginUser = async (username, password) => {
  return await axios.post(`${LoginURL}`, {
    username,
    password,
  });
};

export default { registerUser, LoginUser };
