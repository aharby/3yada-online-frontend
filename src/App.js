import 'semantic-ui-css/semantic.min.css'
import './styles';
import React, { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/auth";
import Home from "./pages/Home";
import Doctor from './pages/Doctor'
import Specialitity from './pages/Speciality'
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Navbar from './components/Navbar'

import { client } from './client';


function App() {
    const [doctors, setDoctors] = useState([])
    const [specialities, setSpecialities] = useState([])

    useEffect(() => {
        const doctorsQuery = '*[_type == "doctor"]';
    
        client.fetch(doctorsQuery).then((data) => {
          setDoctors(data);
        });
    
        const specialitiesQuery = '*[_type == "category"]';
    
        client.fetch(specialitiesQuery).then((data) => {
            setSpecialities(data);
        })
      }, []);


    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if(isAuthenticated)
            dispatch(loadUser());
    }, []);
    
  return (
      <div className="App">
        <Navbar />
        <Routes >
        {(doctors&&specialities)?
            <>
                <Route path="/" element={<Home data={{doctors,specialities}}/>} />
                <Route path="/specialities/:specialitySlug" element={<Specialitity data={{doctors,specialities}}/>} />
                <Route path="/doctors/:doctorSlug" element={<Doctor doctors={doctors}/>} />
            </>:
            <h3>Loading...</h3>
        }
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
  );
}

export default App;
