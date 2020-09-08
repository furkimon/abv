import React from 'react'
import '../assets/styles/Contact.css'
import img4 from '../assets/images/img4.jpg'

const Contact = () => {
    return (
        <div className="contact">
            <h1>This is the CONTACT component</h1>
            <img className="contact__background" src={img4} alt="img4" />
        </div>
    )
}

export default Contact
