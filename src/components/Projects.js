import React from 'react'
import '../assets/styles/Projects.css'
import { img3, minion, amazon, tinder, airbnb, covid } from '../assets/images'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projectCards = [
        {
            image: amazon,
            url: "https://clone-a6171.web.app/",
            title: "Amazon Clone",
            description: "This clone project includes authentication, adding or removing items to basket; in addition to its looks. You can sign up, and sign in & out anytime you like."
        },
        {
            image: tinder,
            url: "https://furkans-tinder.web.app/",
            title: "Tinder Clone",
            description: "Another Clone project, for looks. You can swipe right and left and change the pictures on the list. You can go into messages and experience messaging"
        },
        {
            image: airbnb,
            url: "https://furkans-airbnb.web.app/",
            title: "Airbnb Clone",
            description: "With great looking card components and Explore Nearby, a clone project"
        },
        {
            image: covid,
            url: "https://furkanscovid19app.web.app/",
            title: "Covid-19 Current Numbers",
            description: "This project includes an API for current numbers of Infected, Recovered and Deaths. Visualized the numbers with cards and charts. You can see global info or pick any country to see a chart"
        },
        {
            image: minion,
            title: "Furkimon",
            description: "Hello and welcome and goodbye"
        },
        {
            image: minion,
            title: "Furkimon",
            description: "Hello and welcome and goodbye"
        }
    ]

    const showProjectCards = () => {
        return (
            projectCards.map((projectCard, i) => {
                return (
                    <div key={i} className="projectCardDiv">
                        <ProjectCard projectCard={projectCard} />
                    </div>
                )
            })
        )
    }

    return (
        <div className="projects">
            <img className="projects__background" src={img3} alt="img3" />
            <div className="projects__wrapper">
                <div className="projectCards">
                    {showProjectCards()}
                </div>
            </div>
            <div className="projects__info">
                <h1>The Projects</h1>
                <span>Take a look at what I have created and gain information on my capabilities</span>
            </div>
        </div>
    )
}

export default Projects
