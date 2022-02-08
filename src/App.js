
import './App.css';
import {useState} from "react";

import Register from "./components/Register";
import Login from "./components/Login"
import Profile from './components/Profile';


const App = () => {
  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <Register />
      <Login />
      <Profile />
    </div>
  );
}

export default App;
