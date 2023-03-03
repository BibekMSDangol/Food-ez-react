import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import Register from './components/register';
import './App.css';
import Login from './components/login';

function App() {
  const [foods, setFoods] = useState([]);
  const match = useMatch("/food/:foodId");
  const food = match ? foods.find((f) => f._id === match.params.foodId) : null;
  console.log(food);

  const padding = {
    padding: 5,
  };
  return (
    // <div className="Container">
    //   <Register/>
    //   <Books/>
    //   <Home/>
    //   <Login/>

    // </div>
    <>
      <div className="container">
        {/* Routes */}

        {/* Links */}
        <Link to={"/login"}>Login Page</Link>
        <br></br>
        <Link to={"/register"}>Register Page</Link>
        <br></br>
        {/* Inital route '/' */}
        <Link to={"/"}>Home Page</Link>
        <br></br>
        <Link to={"/books"}>Books</Link>
        <br></br>

        {/* Pages to route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/food/:foodId"
            element={<BookDetails food={food} />}
          ></Route>
          <Route
            path="/food"
            element={<Books foods={foods} setFoods={setFoods} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
