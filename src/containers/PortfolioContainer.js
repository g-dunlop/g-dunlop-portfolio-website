import React from "react";
import IntroContainer from './IntroContainer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const PortfolioContainer = () => {

    return(
        <>
          
            <IntroContainer />
            
            <SkillsContainer />
            
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