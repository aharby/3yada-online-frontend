import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../Logout'
const NavLinks = (props) => {
    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    return (
      <p className="navbar-links" onClick={props.handleClick}>
          {!isAuthenticated?
            <>
              <Link to='/register' className='navbar-links-signup'>Sign Up</Link>
              <Link to='/login' >Login</Link><span> | </span>
            </>
          :  
            <>
              <Link to="/profile" >{currentUser.email}</Link><span> | </span>
              <Logout /><span> | </span>
            </>}
          <Link to='VFDs' >For Doctors</Link><span> | </span>
          <Link to='/contactUs'>Contact Us</Link><span> | </span>
          <Link to='/Lang' >عربي</Link><span> | </span>
          <span>&#x1f1ea;&#x1f1ec;</span>
        </p>
  )
}

export default NavLinks