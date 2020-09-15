import React, { useEffect } from 'react'
import ft from '../assets/images/ft.jpg'
import '../assets/styles/About.css'

import Scrollable from './Scrollable'

const About = () => {
    var image = document.getElementById('aboutID')

    const handleCursor = (e) => {
        if(image){
            image.style.backgroundPositionX = -e.pageX / 10 + "px"
            image.style.backgroundPositionY = -e.pageY / 10 + "px"
        }
    }
    
    return (
        <div  className="about" onMouseMove={handleCursor}>
            <img className="about__logo" src={ft} alt="ft" />
            <Scrollable />
            <div id="aboutID" className="about__background" /> 
        </div>
    )
}
//  src={img1} alt="img1"
export default About
