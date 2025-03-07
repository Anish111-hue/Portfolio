import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./ProjectCard.css";

function ProjectCard ({project, index}) {
  return (
    <Tilt
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      scale={1.05}
      transitionSpeed={450}
      className="project-card"
    >
      <motion.div
        className="project-content"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { delay: index * 0.3, type: "spring", stiffness: 100 } }
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="image-container">
          <img src={project.image} alt={project.name} className="project-image" />
        </div>

        <div className="project-info">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
