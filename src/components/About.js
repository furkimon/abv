import React from 'react'
import img1 from '../assets/images/img1.jpg'
import ft from '../assets/images/ft.jpg'
import '../assets/styles/About.css'

import Scrollable from './Scrollable'

const About = () => {

    return (
        <div className="about">
            <img className="about__logo" src={ft} alt="ft" />
            <Scrollable />
            <img className="about__background" src={img1} alt="img1" />
        </div>
    )
}

export default About
