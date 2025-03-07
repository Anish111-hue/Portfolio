import ProjectCard from './canvas/ProjectCard';
import { projects } from './projectData.js';
import "./ProjectsSection.css"

function ProjectsSection() {
  function openCode(url) {
    window.open(url, "_blank");
  };

  return (
    <div id="Projects" className='projects-section'>
      <div style={{backgroundColor: "rgb(255, 255, 255)",   borderRadius: "100px 0px 0px 0px",  marginLeft: "50px"}}>
        <div className='projects-text'>
          <p className="projects-section-sub-text-light">What I Have Done</p>
          <h2 className="projects-section-head-text-light">Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-element" key={project.name} onClick={() => openCode(project.link)}>
              <ProjectCard project = {project} index = {index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;