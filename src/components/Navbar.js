import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OutsideClick from "./outsideClick";

import logo from '../assets/3yada-online-low-resolution-logo-white-on-transparent-background.png'
import NavLinks from './NavLinks'


const Navbar = () => {
  const [ isNavbarOpen, setisNavbarOpen ] = useState (false);
  
  const sidebarRef = useRef(null);
  const isOutsideClick = OutsideClick(sidebarRef);

  console.log(isOutsideClick)
  useEffect ( ()=> {
    if(isOutsideClick) setisNavbarOpen(false)
  },[isOutsideClick])
  
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
      </div>
      <div className='mobile-navbar' ref={sidebarRef}>
        {!isNavbarOpen&& <i className='fa fa-bars' onClick={()=>setisNavbarOpen(true)}/>}    
        {isNavbarOpen&&
          <div className='sidebar'  >
            <i className='fa fa-times' onClick={()=>setisNavbarOpen(false)} />
            <NavLinks handleClick={()=>setisNavbarOpen(false)}/>
          </div> 
          }
      </div>
    </>
  )
}

export default Navbar