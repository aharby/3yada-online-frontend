import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/3yada-online-low-resolution-logo-white-on-transparent-background.png'
import NavLinks from './NavLinks'


const Navbar = () => {
  const [ isNavbarOpen, setisNavbarOpen ] = useState (false);

  return (
    <>
      <div className='navbar'>
        <Link className='navbar-logo' to='/'>
          <img  className='navbar-logo-img' src={logo} alt="white logo with dotcom" />
          <span>3yada Online</span>
        </Link>
        <div className="navLinks">
          <NavLinks />    
        </div>
        {!isNavbarOpen&& <i className='fa fa-bars mobile-navbar' onClick={()=>setisNavbarOpen(true)}/>}    
      </div>
      <div className='mobile-navbar'>
        {isNavbarOpen&&
        <div className='sidebar'>
          <i className='fa fa-times' onClick={()=>setisNavbarOpen(false)} />
          <NavLinks />
        </div> 
        }
      </div>
    </>
  )
}

export default Navbar