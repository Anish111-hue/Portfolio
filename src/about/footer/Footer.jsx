import React from "react";
import "./Footer.css";

function Footer() {
  function openCode(url) {
    window.open(url, "_blank");
  };
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
           
          <a className="text-secondary" onClick={() => openCode("https://www.linkedin.com/in/anish--k/")}>LinkedIn</a>
          <div className="row"><div>Mail : anishkoppula000@gmail.com.</div> </div>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <span> Designed by </span> 
          <a className="text-secondary" href="#" onClick={(e) => e.preventDefault()}>Anish Koppula</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
