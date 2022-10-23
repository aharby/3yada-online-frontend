import React from 'react'
import HeaderTabs from './HeaderTabs'

const Header = () => {
  return (
    <div className='Home-header'>
          <h1 className='header-content-h1'>Better Healthcare for a Better Life</h1>
          <h2 className='header-content-h2'>Book online or call 📞 <strong>16676</strong></h2>
          <HeaderTabs />
    </div>
  )
}

export default Header