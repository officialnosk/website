import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import { colors } from '../../assests/colors/colors';

const NavBar = (props) => {
  return (
    <div className='navbarContainer'>
        {/* Logo */}
        <Link to="/"><img src={require('../../assests/logo/NOSK_Logo_with_Tagline.png')} className="navbar__logo" alt='nepal open source klub' /></Link>
        <div className='navbarContainer__items' style={{color : colors.header}}>
            {/* About */}
            <Link to='/' className='navbar-link-about'>About</Link>
            {/* Groups Under */}
            <Link to='/' className='navbar-link-groups'>Groups</Link>
            {/* Alumni */}
            <Link to='/' className='navbar-link-alumni'>Alumni</Link>
            {/* Events */}
            <Link to='/' className='navbar-link-events'>Events</Link>
            {/* Projects */}
            <Link to='/' className='navbar-link-projects'>Projects</Link>
            {/* Contact */}
            <Link to='#contact' className='navbar-link-contact'>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar;