import axios from "axios";

const baseUrl = "http://localhost:3000/food";
export const URLS={
  baseUrl:baseUrl,
  loginURL:"user/login",
  regsiterURL : "user/register",
  addProductURL:"books/add",
  viewProductURL:"books"
}
const config = {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  };

function getAll() {
  return axios.get(baseUrl, config);
}

function create(newFood){
    return axios.post(baseUrl, newFood, config)
}
function remove(food_id){
    return axios.delete(`${baseUrl}/${food_id}`, config)
}

export default { getAll, create, remove };
