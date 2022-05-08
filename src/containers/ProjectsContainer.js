import React from "react";
import {useEffect, useState} from 'react';
import Projects from "../components/Projects";
import ProjectsMobile from "../components/ProjectsMobile";

const ProjectsContainer = () => {


    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        
    }
    
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
      })


    
    const breakpoint = 900;

    return(
        <>
        {dimensions.width > breakpoint ? <Projects />:<ProjectsMobile />}
        </>
    )
}

export default ProjectsContainer;