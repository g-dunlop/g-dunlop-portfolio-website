import React from "react";
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const PortfolioContainer = () => {

    return(
        <>
          
            <Intro />
            
            <Skills />
            
            {/* <Projects /> */}
            <Projects />
            <div className="about-contact-container">
                <About />
                <Contact />
            </div>

            
        </>
    )
}

export default PortfolioContainer;