import React from 'react'
import '../assets/styles/Home.css'
import { About, Skills, Projects, Contact } from '../components'
import { useStateValue } from '../reducer/StateProvider'

const Home = () => {
    const [{ whichPage }] = useStateValue();
   
    const showComponent = () => {
        switch (whichPage) {
            case 0:
                return '';
            case 1:
                return '__skills'
            case 2:
                return '__projects'
            case 3:
                return '__contact'
            default:
                return '__contact'
        }
    }
    return (
        <div className="home">
            <div className={"components "+showComponent()}>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home
