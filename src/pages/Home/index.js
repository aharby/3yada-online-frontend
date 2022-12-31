import React, { useRef } from 'react'
import Header from '../../components/Header'
import OfferCard from '../../components/Cards/OfferCard';
import SpecialityCard from '../../components/Cards/SpecialityCard';


const Home = (props) => {
    const doctors = props.data.doctors;
    const specialities = props.data.specialities;

    const specialitiesRef = useRef(null);
    const cardsRef = useRef(null);

    const scroll = (ref, scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

  const specialityCards = specialities.map(item => {
    return (
        <SpecialityCard animation="zoom-out-right" 
            key={item._id}
            item={item}
        />
    )
});

  const offerCards = doctors.map(item => {
    
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