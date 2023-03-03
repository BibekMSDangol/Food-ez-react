import logo from './logo.svg';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
//   useMatch,
// } from "react-router-dom";
import Register from './components/register';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <>
      <div className="container">
        <Login/>
      </div>
    </>
  );
}

export default App;
