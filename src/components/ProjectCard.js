import React from 'react'
import '../assets/styles/ProjectCard.css'
import { goto } from '../assets/images'

const ProjectCard = ({ projectCard }) => {
    const { url, image, title, description } = projectCard
    return (
        <div className="projectCard">
            <div className="wrapper">
                <img className="image" src={image} alt="" />
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <a href={url} target="_blank" rel="noopener noreferrer"><img className="goto" src={goto} alt=""/></a>
        </div>
        </div >
    )
}

export default ProjectCard
