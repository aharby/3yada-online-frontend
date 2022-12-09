import React from "react";
import {useParams} from "react-router-dom"

import OfferCard from "../../components/Cards/OfferCard";


const Speciality = (props) => {
    const {specialitySlug} = useParams();

    const speciality = props.data.specialities.find(speciality => speciality.slug.current=== specialitySlug)
    const doctors = props.data.doctors.filter((doctor) =>{
      return doctor.categories.find(category => category._ref=== speciality._id)})

    const offerCards = doctors.map(item => {
      return (
          <OfferCard animation="slide-up"
              key={item._id}
              item={item}
          />
      )
    });
    

    return (
        <div className="speciality-page">
            {!speciality? <h3>Loading...</h3>:
              <h1>Book a <span>{speciality.name}</span>doctor</h1>

            }
        </div>
    )
}

export default Speciality;