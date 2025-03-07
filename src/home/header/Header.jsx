import "./Header.css";
import logo from "./asset/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header () {
  const [scatter, setScatter] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="left-div">
        <a href="/" className="logo"><img src={logo} alt="A" style={{height: "35px"}}/></a>
      </div>
      <div className="right-div">
        <button onClick={() => navigate("/about")} className="hamburger">
          <span className="top"></span>
          <span className="bottom"></span>
        </button>
        
      </div>
    </header>
  );
};    

export default Header;
