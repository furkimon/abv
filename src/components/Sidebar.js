import React from 'react'
import '../assets/styles/Sidebar.css'

const Sidebar = () => {

    const scrollbutton = () => {
        window.scrollBy(500,500);
        console.log('sidebar click ' + window.scrollX + " " + window.scrollY)
    }
    return (
        <div className="sidebar">
            <h3 onClick={scrollbutton}>≡</h3>
        </div>
    )
}

export default Sidebar
