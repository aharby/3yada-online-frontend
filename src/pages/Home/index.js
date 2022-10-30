import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import OfferCard from '../../components/OfferCard';
import SpecialityCard from '../../components/SpecialityCard.js';

import { client } from '../../client';

const Home = () => {
    const [offers, setOffers] = useState([])
    const [specialities, setSpecialities] = useState([])

  useEffect(() => {
    const offersQuery = '*[_type == "doctor"]';

    client.fetch(offersQuery).then((data) => {
      console.log(data)
      setOffers(data);
    });

    const specialitiesQuery = '*[_type == "category"]';

    client.fetch(specialitiesQuery).then((data) => {
        console.log(data);
        setSpecialities(data);
    })
  }, []);

  const SpecialityCards = specialities.map(item => {
    return (
        <SpecialityCard animation="zoom-out-right" 
            key={item._id}
            item={item}
        />
    )
});

  const offerCards = offers.map(item => {
    return (
        <OfferCard animation="slide-up"
            key={item._id}
            item={item}
        />
    )
});

    return (
        <div className='Home'>
            <Header />
            <h2 className='Home-h2'>Our Specialities</h2>
            <div className='Home-cards'>
                {SpecialityCards}
            </div>
            <h2 className='Home-h2'>Our Doctors</h2>
            <div className='Home-cards'>
                {offerCards}
            </div>
        </div>
    )
}

export default Home;