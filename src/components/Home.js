import React from 'react'
import '../assets/styles/Home.css'
import { About, Skills, Projects, Contact } from '../components'
import { useStateValue } from '../reducer/StateProvider'

const Home = () => {
    const [{ whichPage }] = useStateValue();

    const showComponent = () => {
        switch (whichPage) {
            case 0:
                return <About />
            case 1:
                return <Skills />
            case 2:
                return <Projects />
            case 3:
                return <Contact />
            default:
                return <About />
        }
    }

   
    
    return (
        <div id="homeID" className="home"   >
            {showComponent()}
            <div className="components">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>

        </div>
    )
}

export default Home
