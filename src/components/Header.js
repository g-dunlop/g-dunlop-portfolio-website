import React, { useEffect} from "react";
import styled from "styled-components";
 
import Sidebar from './Sidebar';
import { useState } from "react";

const Header = () => {

    const Div = styled.nav`
        display:flex;
        justify-content:space-between;
        padding:0.5em;
        margin:0;
        font-size:1.2em;
    `

    const Logo = styled.h3`
        padding-left:2em;
        @media (max-width: 900px){
            padding-top:0.5rem;
            padding-left:0.5rem;
        }
        
    `
    const List = styled.ul`
        display:flex;
        list-style:none;
        justify-content:space-evenly;
        align-items:center;
        width:50%;
    `
    const Anchor = styled.a`
        text-decoration:none;
        color:black;
        margin:0;
        padding:0;
        transition: text-decoration 2s ease-in;
        &:hover{
            text-decoration:underline;
        }
        `

    

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

        const breakpoint = 748;
        

    return (
        <>
        <Div className="header">
            <Logo>Graeme Dunlop</Logo>
            {dimensions.width > breakpoint ? <List className="list"> <li><Anchor href="/g-dunlop-portfolio-website/">Home</Anchor></li> <li><Anchor href="#projects">Projects</Anchor></li><li><Anchor href="#about">About</Anchor></li><li><Anchor href="#contact">Contact</Anchor></li></List>:
            <Sidebar />}
        </Div>
        </>
    )
}

export default Header;