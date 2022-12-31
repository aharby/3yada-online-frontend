import React from "react";
import {useParams} from "react-router-dom"


const Doctor = (props) => {
    const {doctorSlug} = useParams();

    const doctor = props.data.doctors.find(doctor => doctor.slug.current=== doctorSlug)

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