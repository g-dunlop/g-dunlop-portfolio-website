import React from "react";
import {useEffect, useState} from 'react';
import Skills from "../components/Skills";
import SkillsMobile from "../components/SkillsMobile";

const SkillsContainer = () => {


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
        {dimensions.width > breakpoint ? <Skills />:<SkillsMobile />}
        </>
    )
}

export default SkillsContainer;