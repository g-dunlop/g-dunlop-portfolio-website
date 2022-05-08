import React from "react";
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsContainer from "./ProjectsContainer";

const PortfolioContainer = () => {

    return(
        <>
          
            <Intro />
            
            <Skills />
            
            {/* <Projects /> */}
            <ProjectsContainer />
            <div className="about-contact-container">
                <About />
                <Contact />
            </div>

            
        </>
    )
}

export default PortfolioContainer;