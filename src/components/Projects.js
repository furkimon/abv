import React from 'react'
import '../assets/styles/Projects.css'
import img3 from '../assets/images/img3.jpg'

const Projects = () => {
    return (
        <div className="projects">
            <h1>This is the PROJECTS component</h1>
            <img className="projects__background" src={img3} alt="img3"/>
        </div>
    )
}

export default Projects
