import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {

    const Div = styled.nav`
        display:flex;
        justify-content:space-between;
        padding:0.5em;
        margin:0;
        font-size:1.2em;
    `

    const Logo = styled.h3`
        padding-left:1em;
    `
    const List = styled.ul`
        display:flex;
        list-style:none;
        justify-content:space-evenly;
        width:50%;
    `
    const Anchor = styled.a`
        text-decoration:none;
        color:black
        `

    return (
        <>
        <Div className="header">
            <Logo>Graeme Dunlop</Logo>
            <List>
                <li><Anchor href="g-dunlop-portfolio-website/">Home</Anchor></li>
                <li><Anchor href="">About</Anchor></li>
                <li><Anchor href="">Contact</Anchor></li>
                <li><Anchor href="/projects">Projects</Anchor></li>
                
            </List>
        </Div>
        </>
    )
}

export default Header;