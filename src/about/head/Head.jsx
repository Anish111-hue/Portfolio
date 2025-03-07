import React, { useEffect, useState } from "react";
import "./Head.css";
import logoWhite from '../assets/logo_white.png';
import logoBlack from '../assets/logo_black.png';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

library.add(fab); 

import { style } from "framer-motion/client";


function Head() {
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isAbsolute, setIsAbsolute] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsTransparent(currentScrollY === 0);
    setIsAbsolute(currentScrollY === 0);

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else if (
      currentScrollY < lastScrollY ||
      currentScrollY + window.innerHeight >= document.documentElement.scrollHeight
    ) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  const handleServicesHover = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const handleSocialHover = () => {
    setShowSocial(true);
  };

  const handleSocialLeave = () => {
    setShowSocial(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const navigate = useNavigate();
  return (
    <header
      className={`header1 ${!isTransparent ? "transparent" : ""} ${isAbsolute ? "absolute" : "fixed"} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className={`header1-top ${isTransparent ? "top-tran" : ""}`}>
        <div className='col-lg-5'>
          <a href="#"><img className="logo1" src = {isTransparent ? logoBlack : logoWhite} alt="no image"></img></a>
        </div>
        <div className=' col-lg-7'>
          <ul className="nav-links">
            <li><a className={`${!isTransparent ? "col-white" : "col-black"}`} onClick={() => navigate("/")} style={{cursor:"pointer"}}>Home</a></li>
            <li><a className={`${!isTransparent ? "col-white" : "col-black"}`} href="#"><Link to="about" smooth={true} duration={500}>About</Link></a></li>
            <li><a className={`${!isTransparent ? "col-white" : "col-black"}`} href="#"><Link to="skills" smooth={true} duration={500}>Skills</Link></a></li>
            <li><a className={`${!isTransparent ? "col-white" : "col-black"}`} href="#"><Link to="Projects" smooth={true} duration={500}>Projects</Link></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Head;

