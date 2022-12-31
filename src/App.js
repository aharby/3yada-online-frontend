import 'semantic-ui-css/semantic.min.css'
import './styles';
import React, { useEffect } from 'react'
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

import { fetchDoctors } from './redux/doctors';
import { fetchSpeiclities } from './redux/specialities'

function App() {
    const { isAuthenticated } = useSelector(state => state.auth);
    const {items:doctors} = useSelector(state=> state.doctors);
    const {items:specialities} = useSelector(state => state.specialities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpeiclities())
        dispatch(fetchDoctors());
    },[dispatch]);
    
    useEffect(()=> {
      if(isAuthenticated) dispatch(loadUser());
    }, [dispatch, isAuthenticated]);
    
  return (
      <div className="App">
        <Navbar />
        <div className='main-container'>
          <Routes >
          {(doctors&&specialities)?
              <>
                  <Route path="/" element={<Home data={{doctors,specialities}}/>} />
                  <Route path="/specialities/:specialitySlug" element={<Specialitity data={{doctors,specialities}}/>} />
                  <Route path="/doctors/:doctorSlug" element={<Doctor data={{doctors}}/>} />
              </>:
              <h3>Loading...</h3>
          }
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
