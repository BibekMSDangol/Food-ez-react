import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import Register from "./components/register";
import "./App.css";
import Login from "./components/login";
import Menu from "./components/menu";
import Foods from "./components/food";
import Home from "./components/home";
import { useState } from "react";

// function App() {
//   const [foods, setFoods] = useState([]);
//   const match = useMatch("/food/:foodId");
//   const food = match ? foods.find((f) => f._id === match.params.foodId) : null;
//   console.log(food);

//   const padding = {
//     padding: 5,
//   };
//   return (
//     // <div className="Container">
//     //   <Register/>
//     //   <Books/>
//     //   <Home/>
//     //   <Login/>

//     // </div>
//     <>
//       <div className="container">
//         {/* Routes */}

//         {/* Links */}
//         <Link to={"/login"}>Login Page</Link>
//         <br></br>
//         <Link to={"/register"}>Register Page</Link>
//         <br></br>
//         {/* Inital route '/' */}
//         <Link to={"/"}>Home Page</Link>
//         <br></br>
//         <Link to={"/food"}>Books</Link>
//         <br></br>

//         {/* Pages to route */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           {/* <Route
//             path="/food/:foodId"
//             element={<BookDetails food={food} />}
//           ></Route> */}
//           <Route
//             path="/food"
//             element={<Foods foods={foods} setFoods={setFoods} />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }
function App(){
  return(
    <div>
      <Login/> 
    </div>
  )
}

export default App;
