import axios from "axios";
const baseUrl = "http://localhost:3000/user ";
const LoginURL = "http://localhost:3000/user/login";

const registerUser = (fname, lname, username, contact, email, password) => {
  return axios.post(`${baseUrl}/register`, {
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
