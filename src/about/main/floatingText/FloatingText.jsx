import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FloatingText.css";

gsap.registerPlugin(ScrollTrigger);

function FloatingText({setIsHovered}) {
    useEffect(() => {

      let data = "With over three years as a .NET Developer in a leading multinational company, I combine innovation with a comprehensive skill set. I excel in both frontend and backend development, with expertise in CSS, HTML, JavaScript, and jQuery and React.js for creating dynamic user interfaces. My backend skills include .NET Core, .NET MVC, Web Services and SQL, ensuring robust and scalable solutions. Additionally, I leverage cloud technologies with Azure and utilize tools like Postman API for seamless integration and testing. I thrive on building solutions that drive efficiency and value, always aiming to turn visions into reality.";
      const textElement = document.getElementById("text");
      textElement.innerHTML = "";

      data.split(" ").forEach((word) => {
        const div = document.createElement("div");
        div.classList.add("floating-div");
        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add("floating-char");
          div.appendChild(span);
        });
        textElement.appendChild(div);
      });

      const letters = document.querySelectorAll(".floating-char");

      gsap.to(letters, {
        y: () => gsap.utils.random(-4000, 1000),
        x: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-40, 40),
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "bottom+=2000 top",
          scrub: 3
          
        }
      });
    }, []);

    return (
        <div id="about" className="summary" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="text-container">
                <div className="floating-text" id="text"></div>
            </div>
        </div>
    );
};

export default FloatingText;
