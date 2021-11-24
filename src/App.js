import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/login/login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  </>
 
  );
}

export default App;

