import React from "react";
import styled from "styled-components";

import gHub from "../static/icons/ghub.png";
import MemoryGameVid from "../static/memory/MemoryGameVid.mp4";
import vmaVid from "../static/vma/vmaVid.mp4";
import stockTrackerVid from "../static/stockTracker/StockTracker2Vid.mp4";



const Projects = () => { 

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:center;
        padding:2rem;
        padding-top:2rem;
        // background-color: #A6E3E9;
        // background-color:#EEEEFF;
        background-color: #292732 ;
        font-size:2rem;
        color:white;
        margin:0;
        letter-spacing:5px;
    `

    const Pic = styled.img`
        height:250px;
        width:400px;
      
    `

    const ProjectSection = styled.section`
        background-color: #292732; 
        display:flex;
        justify-content:space-evenly;
        padding:2rem 0 2rem 0;
        width:100%;
        @media (max-width:900px){
            flex-direction:column;
            padding:1rem 0 1rem 0;
            flex-wrap:wrap;
            align-items:center;
        }
    `

    
    const ProjectHeader = styled.h4`
        color:white;
        font-size:1.5rem;
        text-align:left;
        margin-top:3rem;
        margin-bottom:0.5rem;
        letter-spacing:1px;
        @media (max-width:900px){
            margin-top:1rem;
            margin-bottom:1.5rem;
            text-align:center;
        }
    `

    const Paragraph = styled.p`
        color:white;
        text-align:left;
        font-size:0.8rem;
        line-height:1.5;
        @media (max-width:900px){
            text-align:justify;
            padding:0 0rem 0 0rem;
        }
    `

    const Div = styled.div`
        width:400px;
        text-align:left;
        @media (max-width:900px){
            width:75%;
            text-align:center;
        
        }
    `
    const Row = styled.hr`
        margin:0;
        color:white;
        padding:0.05rem;
    `
    

    return (
        <div id="projects">
            <Title>Projects</Title>
            <Row />
            <ProjectSection className="project" id="st">
                {/* <a href=""><Pic src={StockTracker_1}></Pic></a> */}
                <video className="project-vid" width="400" height="300" autoPlay muted controls loop>
                    <source src={stockTrackerVid} type="video/mp4"></source>
                </video>
                <Div className="description">
                    <ProjectHeader>Stock Tracker</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-Stack app built on week 10 of the CodeClan course.  This was a group project that took 6 days.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span> Built with React, Node js, Express, MongoDB, APIs, Git.</Paragraph>
                    <a className="project-icon" href="https://github.com/g-dunlop/stock_tracker_app_v2" target="_blank"><img className="project-icon" src={gHub}/></a>
                    
                </Div>
                
            </ProjectSection>
            <Row />
            <ProjectSection className="project" id="mg">
                <Div className="description">
                    <ProjectHeader>Memory Game</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-stack app built on week 8 of the CodeClan course.  This was an individual project that took 3 days.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span>Built with React, Node js, Express, MongoDB.</Paragraph>
                    <a className="project-icon" href="https://github.com/g-dunlop/memory-game" target="_blank"><img className="project-icon" src={gHub}/></a>
                    
                </Div>
                {/* <a href=""><Pic src={memorygame}></Pic></a> */}
                <video className="project-vid" width="400" height="300" autoPlay muted controls loop>
                    <source src={MemoryGameVid} type="video/mp4"></source>
                </video>
            </ProjectSection>
            <Row />
            <ProjectSection className="project" id="vma">
                {/* <a href=""><Pic src={home}></Pic></a> */}
                <video className="project-vid" width="400" height="300" autoPlay muted controls loop>
                    <source src={vmaVid} type="video/mp4"></source>
                </video>
                <Div className="description">
                    <ProjectHeader>Vet Management App</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-Stack app built on week 5 of the CodeClan course.  This was an individual project that took 6 days.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span>Built with Python, Flask, Jinja, PostgreSQL.</Paragraph>
                    <a className="project-icon" href="https://github.com/g-dunlop/Project-1-Vet-Management-App" target="_blank"><img className="project-icon" src={gHub}/></a>
                    
                </Div>
            </ProjectSection>
            <Row />
        </div>

    )
}

export default Projects;