import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'

import logo from '../assets/3yada-online-low-resolution-logo-white-on-transparent-background.png'


const Navbar = () => {
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)

  return (
    <div className='navbar'>
      <Link className='navbar-logo' to='/'>
        <img  className='navbar-logo-img' src={logo} alt="white logo with dotcom" />
        <span>3yada Online</span>
      </Link>
      <p className='navbar-links'>
          {!isAuthenticated?
            <>
              <Link to='/register' className='custom_a navbar-links-signup'>Sign Up</Link>
              <Link className='custom_a' to='/login' >Login</Link><span> | </span>
            </>
          :  
            <>
              <Link to="/profile" className="custom_a">{currentUser.email}</Link><span> | </span>
              <Logout /><span> | </span>
            </>}
          <Link className='custom_a' to='VFDs' >For Doctors</Link><span> | </span>
          <Link className='custom_a' to='/contactUs' >Contact Us</Link><span> | </span>
          <Link className='custom_a' to='/Lang' >عربي</Link><span> | </span>
          <span>&#x1f1ea;&#x1f1ec;</span>
      </p>
    </div>
  )
}

export default Navbar