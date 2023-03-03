import axios from "axios";

const baseUrl = "http://localhost:3000/food";
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
