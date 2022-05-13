import headshot from '../static/headshot.jpg'

const About = () => {




    return(
        <div id="about">
        <h1 className="flipped-header">About</h1>
        <hr></hr>
        <div id="about-body">
            <img className="headshot" src={headshot} alt="headshot"></img>
            <div className="about-container">
                <p className="about-paragraph">Hi! I’m a software developer with a background in language education. I have strong organisational, communication and interpersonal skills built over the last 15 years of working as a teacher, mentor, manager and trainer in various countries around the world. </p>
                <p className="about-paragraph">I’m a pro-active problem-solver looking for a junior role which provides opportunities for growth and development during the early stages of my development career.</p>
            </div>
        </div>
        </div>
    )
}

export default About;