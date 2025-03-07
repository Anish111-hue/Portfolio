import { useState } from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.css';
//import '../../../public/bootstrap/dist/css/bootstrap.css'
import FloatingText from './floatingText/FloatingText.jsx';
import SkillsSection from './skillsSection/SkillsSection.jsx';
import ProjectsSection from './projectsSection/ProjectsSection.jsx';
import WorkExperience from './workExperience/WorkExperience.jsx';

function Main({setIsHovered}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-content'>
        <FloatingText setIsHovered={setIsHovered}></FloatingText>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <WorkExperience></WorkExperience>
      </div>
    </>
  )
}

export default Main
