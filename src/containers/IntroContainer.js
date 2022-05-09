import React from "react";
import {useEffect, useState} from 'react';
import Intro from "../components/Intro";
import IntroMobile from "../components/IntroMobile";

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
        {dimensions.width > breakpoint ? <Intro />:<IntroMobile />}
        </>
    )
}

export default ProjectsContainer;