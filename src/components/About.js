import React from 'react'
import ftlogo from '../assets/images/ftlogo.png'
import '../assets/styles/About.css'

import Scrollable from './Scrollable'

const About = () => {
    // var image = document.getElementById('starsID')

    // const handleCursor = (e) => {
    //     if(image){
    //         image.style.backgroundPositionX = -e.pageX / 30 + "px"
    //         image.style.backgroundPositionY = -e.pageY / 30 + "px"
    //     }
    // }           onMouseMove={handleCursor}

    return (
        <div className="about">
            <Scrollable />
            <div className="about__logoWrapper">
                <img className="about__logo" src={ftlogo} alt="ft" />
            </div>
            <div id="aboutID" className="about__background">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="clouds2"></div>
            </div>
        </div>
    )
}

export default About
