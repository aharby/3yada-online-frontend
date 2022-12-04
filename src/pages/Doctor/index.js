import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import '../../styles/Auth.css'

import { client } from "../../client";

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const doctorsQuery = '*[_type == "doctor"]';

    client.fetch(doctorsQuery).then((data) => {
        setDoctors(data);
    });
  },[]);

    const {doctorSlug} = useParams();
    const doctor = doctors.find(doctor => doctor.slug.current=== doctorSlug)

    return (
        <div className="doctor-page">
            <h1>Welcome to Doctor Page</h1>
            {!doctor? <h3 className="card--h3">Loading...</h3>:
              <h3 className="card--h3">{doctor.name}</h3>
            }
        </div>
    )
}

export default Doctor;