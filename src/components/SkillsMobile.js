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

const SkillsMobile = () => {

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
        margin-top:2rem;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        justify-content:space-between;
        width:80%;
    `

    const PicBox = styled.section`
        width:85%;
        height:60px;
        display:flex;
        align-items:center;
        justify-content:center;
    `

    const Pic = styled.img`
    width:50%;
    height:50px;
    `

    const GridContainer = styled.section`
        display:flex;
        justify-content:center;
        // background-color:#EEEEEE;
        // background-color: #A6E3E9;
    `

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:center;
        padding:1rem;
        
        font-size:1.5rem;
        color:#222831;
        margin:0;
        // background-color:#EEEEEE;
        // background-color: #A6E3E9;
    `

    const SkillsComponent = styled.section`
    height:45vh;
    `
    // const GridItem = 

    const SkillDescription = styled.h2`
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:5px;
    `
    

    return (
        <SkillsComponent>
            {/* <Title>Skills</Title> */}
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

export default SkillsMobile;