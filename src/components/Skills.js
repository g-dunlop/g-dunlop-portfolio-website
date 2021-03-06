import React, {useState} from "react";
import styled from "styled-components";

import css3 from "../static/css3.svg";
import git from "../static/git.svg";
import github from "../static/github.svg";
import html5 from "../static/html5.svg";
import java from "../static/java.svg";
import js from "../static/js.svg";
import nodejs from "../static/nodejs.svg";
import python from "../static/python.svg";
import react from "../static/react.svg";

const Skills = () => {

    const[isShown, setIsShown] = useState(false);
    const [description, setDescription] = useState("")

    const skills = {
        css:"css",
        git:"git",
        github:"github",
        html5:"html5",
        java:"java",
        js:"javascript",
        nodejs:"node js",
        python:"python",
        react:"react"
    }

    const handleEnter = (evt) => {
    //    console.log(skills["css"])
    //     console.log(evt.target.id)
        setIsShown(true)
        let skill = skills[evt.target.id]
        setDescription(skill)
    }

    const handleLeave = () => {
        setIsShown(false)
    }

    const Grid = styled.section`
        margin-top:0;
        display:flex;
        justify-content:space-between;
        width:80%;
        @media (max-width:900px){
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            justify-content:space-between;
            width:100%;
            margin-bottom:1rem;
        }
    `

    const PicBox = styled.section`
        width:85%;
        height:120px;
        display:flex;
        align-items:center;
        justify-content:center;
        @media(max-width:900px){
            width:100%;
            height:60px;
        }
    `

    const Pic = styled.img`
    width:50%;
    height:100px;
    @media(max-width:900px){
        width:50%;
        height:50px;
    }
    `

    const GridContainer = styled.section`
        display:flex;
        justify-content:center;
        @media (max-width:900px){
            align-items:center;
            width:100%;
        }
    `

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:center;
        font-size:2rem;
        padding:2rem;
        letter-spacing:5px;
        font-size:2rem;
        color:#222831;
        margin:0;
    
    `

    const SkillsComponent = styled.section`
    height:50vh;
    margin:bottom:1rem;
    @media (max-width:900px){
        height:auto;
    }
    `
    // const GridItem = 

    const SkillDescription = styled.h2`
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0;
        @media (max-width:900px){
            margin-bottom:1rem;
        }
    `
    

    return (
        <SkillsComponent>
            <Title>Skills</Title>
          <hr className="skills-hr"></hr>
            <GridContainer className="grid-container">
            <Grid className="grid">
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="css" src={css3}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="git" src={git}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="github" src={github}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="html5" src={html5}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="java" src={java}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="js" src={js}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="nodejs" src={nodejs}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="python" src={python}/>
                </PicBox>
                <PicBox  className="img-container">
                    <Pic onMouseEnter={handleEnter}
        onMouseLeave={handleLeave} id="react" src={react}/>
                </PicBox>
            </Grid>
            
            </GridContainer>
            {isShown ? <SkillDescription>{description}</SkillDescription> : null}
        </SkillsComponent>
    )
}

export default Skills;