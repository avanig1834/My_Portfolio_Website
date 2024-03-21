import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
      <nav className="navbar">
        <div className="heading">
            <h1>AVANI</h1>
        </div>
        {/* <img src={logo} alt="logo_unloaded" className='logo'/> */}
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500} className='desktopMenuItem'>About</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-25} duration={500} className='desktopMenuItem'>Skills</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-25} duration={500} className='desktopMenuItem'>Qualification</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-25} duration={500} className='desktopMenuItem'>Portfolio</Link>
            {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Connect</Link> */}
        </div>

        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-25} duration={500} className='listItem' >Skills</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-25} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Qualification</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-25} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-25} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
      </nav>

  )
}

export default Navbar
