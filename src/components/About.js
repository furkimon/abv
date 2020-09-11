import React from 'react'
import ft from '../assets/images/ft.jpg'
import '../assets/styles/About.css'

import Scrollable from './Scrollable'

const About = () => {
    // const [xPos, setXPos] = useState('')
    // const [yPos, setYPos] = useState('')
    const image = document.getElementById('aboutID')

    const handleCursor = (e) => {
        // setXPos(e.pageX)
        // setYPos(e.pageY)
        image.style.backgroundPositionX = -e.pageX / 10 + "px"
        image.style.backgroundPositionY = -e.pageY / 10 + "px"
    //    console.log("offsettop : " + e.pageX / 100)
    //    console.log("offsetLeft : " + e.pageY / 100)
    //    console.log("ne: " + image.style.backgroundPositionX)
    }

    // console.log(xPos + " " + yPos)
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
