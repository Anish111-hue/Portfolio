import React, { useEffect, useRef, useState } from "react";
import Head from "./about/head/Head.jsx";
import Main from "./about/main/Main.jsx";
import Footer from "./about/footer/Footer.jsx"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [isHovered, setIsHovered] = useState(true);

  document.querySelector("body").style.backgroundColor = "#ffffff";
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.pageX,
        y: e.pageY,
        duration: 0.5,
        ease: "elastic.out(0.001, 20)"
      });
    });
    document.addEventListener("scroll", (e) => {
      gsap.to(cursor, {
        x: e.pageX,
        y: e.pageY,
        duration: 1,
        ease: "elastic.out(3, 2.5)"
      });
    });
  }, []);
  return (
    <>
      <div className={`cursor ${isHovered ? "" : "hide"}`}></div>
      <Head></Head>
      <Main setIsHovered={setIsHovered}></Main>
      <Footer></Footer>
    </>
  );
};

export default About;
