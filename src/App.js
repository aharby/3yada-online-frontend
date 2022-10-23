import './App.css';

import React, { useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authActions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Navbar from './components/Navbar'

function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(loadUser());
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
  return (
      <div className="App">
         <Navbar />
          <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='*' element={<NoMatch />} />
          </Routes>
      </div>
  );
}

export default App;
