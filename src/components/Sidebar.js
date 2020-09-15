import React from 'react'
import '../assets/styles/Sidebar.css'

const Sidebar = () => {
    var buttona = document.getElementById('sideButton')

    const scrollbutton = () => {
        console.log(buttona)
    }
    return (
        <div  className="sidebar">
            <div className="sidebar__button" id="sideButton" onClick={scrollbutton}>≡</div>
        </div>
    )
}

export default Sidebar
