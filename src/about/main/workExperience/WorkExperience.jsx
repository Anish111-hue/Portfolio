import React from "react";
import "./WorkExperience.css";
import { experiences } from "./experienceData";

function WorkExperience() {
  return (
    <section className="work-experience">
      <div className='exp-text'>
        <p className="exp-sub-text-light">My Journey</p>
        <h2 className="exp-head-text-light">Work Experience.</h2>
      </div>
      <h2 className="title">Work Experience</h2>
      <div className="timeline">
      {experiences.map((exp, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>

            {index % 2 == 0 ? (
            <div className="content">
                <h3 style={{fontFamily: "inherit", fontWeight: "506"}}>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
            </div>
            ) : null}
            <div className="circle"><div style={{paddingTop: "5px"}}>{index + 1}</div></div>
            {index % 2 != 0 ? (
            <div className="content">
                <h3 style={{fontFamily: "inherit", fontWeight: "506"}}>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
            </div>
            ) : null}
        </div>
      ))}
      </div>
    </section>
  );
};

export default WorkExperience;
