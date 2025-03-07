import BallCanvas from './canvas/Ball';
import { technologies } from './techData.js';
import "./SkillsSection.css"

function SkillsSection() {
  return (
    <div id="skills" className='skills-section'>
      <div className='skills-text'>
        <p className="section-sub-text-light">MY SKILLS</p>
        <h2 className="section-head-text-light">Technologies.</h2>
      </div>

      <div className="skills-list">
        {technologies.map((technology) => (
          <div className="element" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;