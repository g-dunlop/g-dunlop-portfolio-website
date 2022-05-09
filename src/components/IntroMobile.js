import React from "react";
import styled from "styled-components";
import TreePic from "../static/tree_pic.jpg";
import MountainRange from "../static/mountain_range.jpg";
import Banner from "../static/coding-banner.jpg";




const IntroMobile = () => {

    const Container = styled.section`
        display:flex;
       
        width:100%;
        justify-content:center;
        align-items:center;
        height:50vh;
        font-family:Esteban, serif;
        color:#393E46;
        background-image: url(${Banner});
        background-size:cover;
        background-position:center;
        // background-repeat:no-repeat;
    `

    const Title = styled.h3`
        font-family:Montserrat, sans-serif;
        text-align:left;
        padding:1rem;
        padding-left:4rem;
        padding-top:4.5rem;
        font-size:2rem;
        color:white;
        margin:0;
    `

    const List = styled.ul`
        display:flex;
        flex-direction:column;
        align-items:center;
        list-style:none;
        text-align:center;
        justify-content:center;
        margin:0;
        padding:1.5rem;
        // padding-left:4rem;
    `
        const Item = styled.li`
        padding:0.8rem 0rem 1rem 0rem;
        font-family:Montserrat, sans-serif;
        font-size:1rem;
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
        background-color: hsl(260,20%,20%, 0.8);
        height:50vh;
        width:100%;
        
        `
       

    return (
        
        <>
           
            <Container className="intro-container">
                <Div className="intro-left">
                    {/* <Title>Introduction</Title> */}
                    <List>
                     {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>; */}
                        <Item>Full-Stack Software Developer</Item>
                        <Item>CodeClan Graduate</Item>
                        <Item>15 years in Education</Item>
                        <Item>Extensive Management and Training Experience</Item>
                        <Item>Lifelong Learner</Item>
                    </List>
                </Div>
              

            </Container> 
        </>
    )
}

export default IntroMobile;