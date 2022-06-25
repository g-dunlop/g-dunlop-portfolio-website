import React from "react";
import styled from "styled-components";

import gHub from "../static/icons/ghub.png";
import MemoryGameVid from "../static/memory/MemoryGameVid.mp4";
import vmaVid from "../static/vma/vmaVid.mp4";
import stockTrackerVid from "../static/stockTracker/StockTracker2Vid.mp4";
import TractorFactor from "../static/tractorfactor/TractorFactor.mp4"


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
        margin-top:2rem;
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
    const Git = styled.img`
        height:25px;
        width:25px;
        margin-left:1rem;
        background-color:white;
        border-radius:5px;
        padding:0.1rem;
        `
    const GitDiv = styled.div`
        display:flex;
        align-items:center;
    `

    return (
        <div id="projects">
            <Title>Projects</Title>
            <Row />
            <ProjectSection className="project" id="tf">
                
                <Div className="description">
                    <ProjectHeader>TractorFactor</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-Stack app built on the last 2 weeks of the CodeClan course.  This was a group project that took 12 days.</Paragraph>
                    <Paragraph><span className="bolding">Purpose: </span>The app allows an online tractor auction site to quickly find a qualified person to authenticate the sold vehicle.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span> Built with React, React Bootstrap, Java, Google Maps API, Spring Boot, h2 SQL database.</Paragraph>
                    <Paragraph><GitDiv><span className="bolding">ReadMe: </span><a className="project-icon" href="https://github.com/g-dunlop/Tractor_Inspector_Finder_App" target="_blank"><Git className="project-icon" src={gHub}/></a></GitDiv></Paragraph> 
                </Div>
                <video className="project-vid" width="400" height="300" autoPlay muted controls loop>
                    <source src={TractorFactor} type="video/mp4"></source>
                </video>
            </ProjectSection>
           
            <Row />
            <ProjectSection className="project" id="st">
                <video className="project-vid" width="400" height="300" autoPlay muted controls loop>
                    <source src={stockTrackerVid} type="video/mp4"></source>
                </video>
                <Div className="description">
                    <ProjectHeader>Stock Tracker</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-Stack app built on week 10 of the CodeClan course.  This was a group project that took 6 days.</Paragraph>
                    <Paragraph><span className="bolding">Purpose: </span>The app allows a small-scale trader to track and analyse the stocks they hold in their portfolio.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span> Built with React, Node js, Express, MongoDB, APIs, Git.</Paragraph>
                    <Paragraph><GitDiv><span className="bolding">ReadMe: </span><a className="project-icon" href="https://github.com/g-dunlop/stock_tracker_app_v2" target="_blank"><Git className="project-icon" src={gHub}/></a></GitDiv></Paragraph>
                    
                </Div>
                
            </ProjectSection>
            <Row />
            <ProjectSection className="project" id="mg">
                <Div className="description">
                    <ProjectHeader>Memory Game</ProjectHeader>
                    <Paragraph><span className="bolding">About: </span>Full-stack app built on week 8 of the CodeClan course.  This was an individual project that took 3 days.</Paragraph>
                    <Paragraph><span className="bolding">Purpose: </span>This was an extra project I set myself to see if I could replicate the memory game 'Simon', which I played as a young child.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span>Built with React, Node js, Express, MongoDB.</Paragraph>
                    <Paragraph><GitDiv><span className="bolding">ReadMe: </span><a className="project-icon" href="https://github.com/g-dunlop/memory-game" target="_blank"><Git className="project-icon" src={gHub}/></a></GitDiv></Paragraph>
                    
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
                    <Paragraph><span className="bolding">Purpose: </span>The app allows veterinary practice to keep records of their customers, their pets, and the bookings made at the practice.</Paragraph>
                    <Paragraph><span className="bolding">Tools: </span>Built with Python, Flask, Jinja, PostgreSQL.</Paragraph>
                    <Paragraph><GitDiv><span className="bolding">ReadMe: </span><a className="project-icon" href="https://github.com/g-dunlop/Project-1-Vet-Management-App" target="_blank"><Git className="project-icon" src={gHub}/></a></GitDiv></Paragraph>
                    
                </Div>
            </ProjectSection>
            <Row />
        </div>

    )
}

export default Projects;