import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./ContentText.css";

function ContentText () {
  var data = [
    "DotNet Developer",
    "Full Stack DEV",
    "Front End Enthusiast",
    "Leetcoder"
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(".text", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.in"
    });
    timeline.to(".text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
    });
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-holder" style={{paddingTop:"90px"}}>
      <h1 style={{fontSize:"6rem", fontWeight: "600"}}>Anish Koppula</h1>
      <h2 style={{fontSize:"1.5rem", fontWeight:"bold"}}>{data[index]}</h2>
    </div>
  );
};

export default ContentText;
