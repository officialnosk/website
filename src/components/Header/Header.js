import React from 'react';
import './Header.css';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import NavBar from '../../components/NavBar/NavBar';

import { colors } from '../../assests/colors/colors';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
        {/* Navbar */}
        <NavBar />
        <NavigateBeforeIcon  style={{fontSize : '60px' , position:'absolute' , top : '50%' , left:'0%' , cursor:'pointer'}} onClick={props.onBeforeIconClicked}/>
        <NavigateNextIcon style={{fontSize : '60px' , position:'absolute' , top : '50%' , right:'0%' , cursor:'pointer'}} onClick={props.onNextIconClicked} />
        <div className='heading-box'>
          <h1 className='header__heading' style={{color : colors.yellow}}>Welcome to the official website of <br />NOSK(Nepal Open Source Klub)</h1>
          <div className="heading-box__buttonContainer">
            <p className='header__learnMore'>Learn More</p>
            <Link to='/about' className='header-link-about'>About</Link>
          </div>
        </div>
      </header>
  )
}

export default Header;