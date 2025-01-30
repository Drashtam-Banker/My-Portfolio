import React, { useState } from 'react';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import './navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            {/* Logo */}
            <img src={logo} alt="Logo" className="logo" />

            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>
                <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>

            {/* Contact Button */}
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />Contact Me
            </button>

            {/* Mobile Menu Icon */}
            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

            {/* Mobile Dropdown Menu */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
