import React from "react";
import styled from "styled-components";
import TreePic from "../static/tree_pic.jpg";
import MountainRange from "../static/mountain_range.jpg";
import Banner from "../static/coding-banner.jpg";
import logo from "../static/icons/logo.png"




const Intro = () => {

    const Container = styled.section`
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        width:100%;
        justify-content:space-evenly;
        align-items:center;
        height:auto;
        font-family:Esteban, serif;
        color:#393E46;
        background-image: url(${Banner});
        background-size:cover;
        background-position:center;
        // background-repeat:no-repeat;
    `

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:center;
        padding:2rem;
        padding-top:2rem;
        // padding-top:4.5rem;
        font-size:2rem;
        color:white;
        margin:0;
    `

    const List = styled.ul`
        list-style:none;
        text-align:center;
        margin:0;
        padding:0 1.5rem 1.5rem 1.5rem;
        // padding-left:4rem;
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

        const Div = styled.div`
        // background-color: hsla(275,20%,15%, 0.8);
        background-color:#292732;
        opacity:0.9;
        height:auto;
        width:100%;
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
        `
       

    return (
        
        <>
           
            <Container className="intro-container">
                <Div className="intro-left">
                    {/* <Title>Hello. I'm Graeme.</Title> */}
                    <Logo src={logo} />
                    {/* <Row /> */}
                    <List>
                     {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>; */}
                        <Item>Full-Stack Software Developer</Item>
                        <Item>CodeClan Graduate</Item>
                        <Item>15 years in Education</Item>
                        <Item>Extensive Management and Training Experience</Item>
                        <Item>Lifelong Learner</Item>
                    </List>
                </Div>
                <div className="intro-right">
                    
                </div>

            </Container> 
        </>
    )
}

export default Intro;