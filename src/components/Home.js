import React, { useRef } from 'react'
import '../assets/styles/Home.css'
import { About, Skills, Projects, Contact } from '../components'
import { useStateValue } from '../reducer/StateProvider'
import { Link } from 'react-scroll'
import scrollElement from 'react-scroll/modules/mixins/scroll-element'
import { scrollTo } from 'react-scroll/modules/mixins/scroller'

const scrollToRef = (ref) => {
    // window.scrollTo(0, ref.current.focus())
    console.log(ref.current)
}

const Home = () => {
    const [{ whichPage }] = useStateValue();

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const executeScroll = (ref) => scrollToRef(ref)


    const showComponent = () => {

        switch (whichPage) {
            case 0:
                return (
                    
                    executeScroll(aboutRef),
                    console.log('0 clicked')
                    
                    // <About />
                )
            case 1:
                return (
                //    (()=> skillsRef.scrollIntoView({ behavior: 'smooth', block: 'start' }))
                    console.log('1 clicked' + window.scrollTo),
                    window.scrollTo({top: 0, behavior: 'smooth'})
                    
                    // executeScroll(skillsRef)
                    // <Skills />
                    
                    // (() => About.scrollTo({
                    //     top: About.length * 3,
                    //     left: 100,
                    //     behavior: 'smooth'
                    //   })),
                    //     console.log(window)
                        
                    

                )
            case 2:
                return (
                    console.log('2 clicked'),
                    executeScroll(projectsRef)
                    
                    // <Projects />
                )
            case 3:
                return (console.log('3 clicked'),
                    executeScroll(contactRef)
                    // <Contact />
                )
            default:
                return (
                    <About />
                )
        }
    }

    

    return (
        <div className="home" >
            {showComponent()}

            <div id="aboutID" ref={aboutRef}><About /></div>
            <div id="skillsID" ref={skillsRef} ><Skills /></div>
            <div id="projectsID" ref={projectsRef}><Projects /></div>
            <div id="contactID" ref={contactRef}><Contact /></div>
            {/* <div className="components">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div> */}

        </div>
    )
}

export default Home
