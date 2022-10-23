import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import OfferCard from '../../components/OfferCard';

import { client } from '../../client';

const Home = () => {
    const [offers, setOffers] = useState([])

  useEffect(() => {
    const offersQuery = '*[_type == "doctor"]';

    client.fetch(offersQuery).then((data) => {
      console.log(data)
      setOffers(data);
    });

  }, []);

  const offerCards = offers.map(item => {
    return (
        <OfferCard
            key={item._id}
            item={item}
        />
    )
});

    return (
        <div className='Home'>
            <Header />
            <h2 className='Home-h2'>New services for better healthcare</h2>
            <div className='Home-cards'>
                {offerCards}
            </div>
        </div>
    )
}

export default Home;