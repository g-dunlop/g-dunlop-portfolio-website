import React from "react";
import {useEffect, useState} from 'react';
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

const HeaderContainer = () => {


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
        {dimensions.width > breakpoint ? <Header />:<HeaderMobile />}
        </>
    )
}

export default HeaderContainer;