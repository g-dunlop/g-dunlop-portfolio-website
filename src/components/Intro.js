import React from "react";
import styled from "styled-components";

import Banner from "../static/coding-banner.png";
import logo2 from "../static/icons/Logo2.png"




const Intro = () => { 

    const Container = styled.section`
        display:flex;
        flex-wrap:wrap;
        width:100%;
        height:auto;
        font-family:Esteban, serif;
        color:#393E46;
        background-image: url(${Banner});
        background-size:cover;
        background-position:center;
        z-index:-1;
    `
    const Div = styled.div`
        background-color:#292732;
        opacity:0.9;
        height:auto;
        width:100%;
        `

    const List = styled.ul`
        list-style:none;
        text-align:center;
        margin:0;
        padding:1.5rem 1.5rem 1.5rem 1.5rem;
        @media (max-width:900px){
            padding:0rem 1rem 1rem 1rem;
        }
    `
        const Item = styled.li`
        padding:0.8rem 0rem 1rem 0rem;
        font-family:Montserrat, sans-serif;
        font-size:1.2rem;
        margin:0;
        color:#D8D8D8;
        font-weight:bold;
        letter-spacing:1px;
        `

        const Pic = styled.img`
        height:400px;
        width:400px
        `

        

        const Row = styled.hr`
        margin:0;
        color:white;
        padding:0rem;   
    `
        const Logo = styled.img`
        height:100px;
        width:150px;
        margin:0;
        position:absolute;
        left:1.5rem;
        @media (max-width:900px){
            position:relative;
            left:0;
        }
        `
       

    return (
        
        <>
            <Container className="intro-container" >
            
                <Div className="intro-left">
                    {/* <Title>Hello. I'm Graeme.</Title> */}
                    <Logo src={logo2} />
                    {/* <Row /> */}
                    <List>
                     {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>; */}
                        <Item>Full-Stack Software Developer</Item>
                        <Item>CodeClan Graduate</Item>
                        <Item>15 years in Language Education</Item>
                        <Item>Extensive Management and Training Experience</Item>
                        <Item>Lifelong Learner</Item>
                    </List>
                </Div>

            </Container> 
        </>
    )
}

export default Intro;