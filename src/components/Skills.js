import React from 'react'
import '../assets/styles/Skills.css'
import img2 from '../assets/images/img2.jpg'

const Skills = () => {
    return (
        <div className="skills">
            <h1>This is the SKILLS component</h1>
            <img className="skills__background" src={img2} alt="img2"/>
        </div>
    )
}

export default Skills
