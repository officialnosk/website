import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

import { colors } from '../../assests/colors/colors';

const NavBar = (props) => {
  const [sticky , setSticky] = useState(false);
  const onScrollHandler = () => {
    if(window.scrollY > 80){
      setSticky(true);
    }else{
      setSticky(false);
    }
  }
  window.addEventListener("scroll" , onScrollHandler);
  return (
    <div className={sticky?styles.navbarContainerSticky : styles.navbarContainer}>
        {/* Logo */}
        <Link to="/"><img src={require('../../assests/logo/NOSK_Logo_with_Tagline.png')} className={styles.navbar__logo} alt='nepal open source klub' /></Link>
        <div className={styles.navbarContainer__items}>
            {/* About */}
            <Link to='/' className={sticky?styles.navbarLinkAboutSticky:styles.navbarLinkAbout}>About</Link>
            {/* Groups Under */}
            <Link to='/' className={sticky?styles.navbarLinkGroupsSticky:styles.navbarLinkGroups}>Groups</Link>
            {/* Alumni */}
            <Link to='/alumni' className={sticky?styles.navbarLinkAlumniSticky:styles.navbarLinkAlumni}>Alumni</Link>
            {/* Events */}
            <Link to='/' className={sticky?styles.navbarLinkEventsSticky:styles.navbarLinkEvents}>Events</Link>
            {/* Projects */}
            <Link to='/' className={sticky?styles.navbarLinkProjectsSticky:styles.navbarLinkProjects}>Projects</Link>
            {/* Contact */}
            <Link to='/contact' className={sticky?styles.navbarLinkContactSticky:styles.navbarLinkContact}>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar;