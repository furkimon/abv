import React from 'react'
import '../assets/styles/Skills.css'
import img2 from '../assets/images/img2.jpg'
import SkillPages from './SkillPages' 

const Skills = () => {
    return (
        <div  id="skills" className="skills">
            <SkillPages />
            <img className="skills__background" src={img2} alt="img2"/>
        </div>
    )
}

export default Skills
