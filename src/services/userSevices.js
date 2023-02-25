import axios  from "axios";

const baseUrl = "http://localhost:3001/user";

const login = (username, password) => {
    return  axios.post(`${baseUrl}/login/`, { username, password });
    
    }

    const register = (credential) => {
        return  axios.post(`${baseUrl}/register/`, credential);
    }

const getoneuser = (id) => {
    return  axios.get(`${baseUrl}/${id}`);
}

const updateuser = (id, credential) => {
    return  axios.put(`${baseUrl}/user/${id}`, credential);
}
const getalluser = () => {
    return  axios.get(`${baseUrl}/`);
}

const deleteuser = (id) => {
    return  axios.delete(`${baseUrl}/${id}`);
}



export default { login, register,getoneuser,updateuser,getalluser ,deleteuser};