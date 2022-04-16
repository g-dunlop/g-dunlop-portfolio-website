import React from "react";
import styled from "styled-components";
import Guitar from "../static/guitar.jpg";
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

    const Grid = styled.section`
        // height:90vh;
        display:flex;
        justify-content:space-between;
        width:80%;
    `

    const PicBox = styled.section`
        width:85%;
        height:170px;
        display:flex;
        align-items:center;
    `

    const Pic = styled.img`
    width:50%;
    height:150px;
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
        padding-top:2rem;
        font-size:2rem;
        color:#222831;
        margin:0;
        // background-color:#EEEEEE;
        // background-color: #A6E3E9;
    `

    // const GridItem = 
    

    return (
        <>
            <Title>Skills</Title>
            <GridContainer className="grid-container">
            <Grid className="grid">
                <PicBox className="img-container">
                    <Pic src={css3}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={git}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={github}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={html5}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={java}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={js}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={nodejs}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={python}/>
                </PicBox>
                <PicBox className="img-container">
                    <Pic src={react}/>
                </PicBox>
            </Grid>
            </GridContainer>
        </>
    )
}

export default Skills;