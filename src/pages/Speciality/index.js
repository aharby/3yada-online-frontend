import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import { client } from "../../client";

const Speciality = () => {
    const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    const specialitiesQuery = '*[_type == "category"]';

    client.fetch(specialitiesQuery).then((data) => {
        setSpecialities(data);
    });
  },[]);

    const {specialitySlug} = useParams();
    const speciality = specialities.find(speciality => speciality.slug.current=== specialitySlug)

    return (
        <div className="speciality-page">
            <h1>Welcome to Speciality Page</h1>
            {!speciality? <h3 className="card--h3">Loading...</h3>:
              <h3 className="card--h3">{speciality.name}</h3>
            }
        </div>
    )
}

export default Speciality;