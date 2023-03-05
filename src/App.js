import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import Register from "./components/register";
// import "./App.css";
import Login from "./components/login";
import Foods from "./components/food";
import Home from "./components/home";
import { useState } from "react";
// import './components/design.css'
// import { Navbar } from "reactstrap";
import Navbar from './components/navb';
import Lg from "./components/lg";
import Signup from "./components/reg";
import FoodDetails from "./components/foodDetails";

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
//         <Link to={"/food"}>Foods</Link>
//         <br></br>

//         {/* Pages to route */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Lg />} />
//           <Route path="/register" element={<Signup />} />
//           <Route
//             path="/food/:foodId"
//             element={<FoodDetails food={food} />}
//           ></Route>
//           <Route
//             path="/food"
//             element={<Foods foods={foods} setFoods={setFoods} />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }
// function App(){
//   return(
//     <Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={'/login'}>
//             FoodEz
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={'/login'}>
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={'/register'}>
//                   Register
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   </Router>
//   )
// }
function App(){
  return(
    <div>
      <Navbar/>
    </div>
  )
}
export default App;
