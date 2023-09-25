import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Component/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
