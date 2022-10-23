import React, { useState } from 'react'

import BookDoctor from './BookDoctor'
import Telehealth from './Telehealth'

const HeaderTabs = () => {
  const [isBookingTabActive, setIsBookingTabActive] = useState(true);

  return (
    <div className="Tabs">

    <ul className="nav">
      <li onClick={()=> setIsBookingTabActive(true)}>Book a doctor</li>
      <li onClick={() => setIsBookingTabActive(false)}>Telehealth</li>
    </ul>
    <div className="outlet">
      {isBookingTabActive? <BookDoctor /> : <Telehealth /> }
    </div>
  </div>
  )
}

export default HeaderTabs