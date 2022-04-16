import React from "react";
import styled from "styled-components";
import home from "../static/vma/home.jpg";
import memorygame from "../static/memory/memorygame.jpg"

const Projects = () => {

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:center;
        padding:2rem;
        padding-top:2rem;
        // background-color: #A6E3E9;
        // background-color:#EEEEEE;
        background-color: #222831 ;
        font-size:2rem;
        color:white;
        margin:0;
    `

    const Pic = styled.img`
        height:250px;
        width:400px;
        
    `

    const ProjectSection = styled.section`
        background-color: #222831; 
        display:flex;
        justify-content:space-evenly;
        padding:2rem 0 2rem 0;
        width:100%;
    `

    const ProjectHeader = styled.h4`
        color:white;
        font-size:1.5rem;
        text-align:left;
    `

    const Paragraph = styled.p`
        color:white;
        text-align:left;
    `

    const Div = styled.div`
        width:400px;
    `
    const Row = styled.hr`
        margin:0;
        color:white;
        padding:0.05rem;
    `

    return (
        <>
            <Title>Projects</Title>
            <Row />
            <ProjectSection className="project" id="vma">
                <a href=""><Pic src={home}></Pic></a>
                <Div className="description">
                    <ProjectHeader>Vet Management App</ProjectHeader>
                    <Paragraph>Python, Flask, Jinja</Paragraph>
                    <Paragraph>Full-Stack</Paragraph>
                    <a href="https://github.com/g-dunlop/Project-1-Vet-Management-App"><Paragraph>Github Repository Link</Paragraph></a>
                    <Paragraph>Link to live website</Paragraph>
                </Div>
            </ProjectSection>
            <Row />
            <ProjectSection className="project" id="vma">
                <Div className="description">
                    <ProjectHeader>Memory Game</ProjectHeader>
                    <Paragraph>React</Paragraph>
                    <Paragraph>Front-end only</Paragraph>
                    <a href="https://github.com/g-dunlop/memory-game"><Paragraph>Github Repository Link</Paragraph></a>
                    <Paragraph>Link to live website</Paragraph>
                </Div>
                <a href=""><Pic src={memorygame}></Pic></a>
            </ProjectSection>
            <Row />
        </>

    )
}

export default Projects;