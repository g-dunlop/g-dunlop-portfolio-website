import linkedIn from '../static/icons/linkedIn.png'
import email from '../static/icons/email.png'

const Contact = () => {


    return (
        <>
        <h1 className="flipped-header">Contact</h1>
        <hr></hr>
        <div id="contact" className="contact-container">
        <a href="https://vn.linkedin.com/in/graeme-dunlop-537219138" target="_blank"><img className="contact-icon" src={linkedIn}></img></a>
        <a href="mailto:graemedunlop1983@gmail.com"><img className="contact-icon" src={email}></img></a>
        </div>
        </>
    )
}

export default Contact;