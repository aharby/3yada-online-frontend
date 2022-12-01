import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import OfferCard from '../../components/Cards/OfferCard';
import SpecialityCard from '../../components/Cards/SpecialityCard';

import { client } from '../../client';

const Home = () => {
    const [offers, setOffers] = useState([])
    const [specialities, setSpecialities] = useState([])
    const specialitiesRef = useRef(null);
    const cardsRef = useRef(null);

    const scroll = (ref, scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

  useEffect(() => {
    const offersQuery = '*[_type == "doctor"]';

    client.fetch(offersQuery).then((data) => {
      setOffers(data);
    });

    const specialitiesQuery = '*[_type == "category"]';

    client.fetch(specialitiesQuery).then((data) => {
        setSpecialities(data);
    })
  }, []);

  const specialityCards = specialities.map(item => {
    return (
        <SpecialityCard animation="zoom-out-right" 
            key={item._id}
            item={item}
        />
    )
});
console.log(1,offers)
  const offerCards = offers.map(item => {
    
    return (
        <OfferCard animation="slide-up"
            key={item._id}
            item={item}
        />
    )
});
    console.log(offers)
    return (
        <div className='Home'>
            <Header />
            <h2 className='Home-h2'>Our Specialities</h2>
            <div className='Home--container' >
                <div className='scrollbtn' onClick={() => scroll(specialitiesRef, -800)}><i className="fa fa-light fa-backward"></i></div>
                    <div className='Home-cards' ref={specialitiesRef}>
                        {specialityCards}
                    </div>
                <div className='scrollbtn' onClick={() => scroll(specialitiesRef,800)}><i className="fa fa-forward"></i></div>
            </div>
            <h2 className='Home-h2'>Our Doctors</h2>
            <div className='Home--container' >
                <div className='scrollbtn' onClick={() => scroll(cardsRef,-800)}><i className="fa fa-backward"></i></div>
                    <div className='Home-cards' ref={cardsRef}>
                        {offerCards}
                    </div>
                <div className='scrollbtn' onClick={() => scroll(cardsRef,800)}><i className="fa fa-light fa-forward"></i></div>
            </div>
        </div>
    )
}

export default Home;