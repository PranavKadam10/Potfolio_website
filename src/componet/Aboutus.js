import Navbar from "./Navbar";
import '../css/About.css'

export default function Aboutus(){
    return(
        <>
        <Navbar/>
        <div className="row2" style={{padding:'30px'}}>
            <div className="column2" style={{textAlign:'center'}}>
                <img src='images/programmer-clipart-md.jpg' style={{height:'300px', mixBlendMode:'multiply'}}/>
            </div>
            <div className="column2">
                <h1 style={{fontSize:'35px'}}>Hi !</h1>
                <h2 style={{fontSize:'30px'}}>My Name is PRANAV KADAM</h2>
            <p id = 'info'>
            I am a motivated and enthusiastic fresher web developer, eager to kickstart my
            career in the field. I have a solid foundation in HTML, CSS, and JavaScript. I am
            passionate about creating dynamic and visually appealing websites, and I am
            committed to continuously learning and growing in the ever-evolving world of web
            development. I am a quick learner, a problem-solver, and a dedicated team player,
            ready to contribute my skills and bring value to any project I work on..
            </p>
            <a className="conatct_btn" href='/contact'>Contact Me</a>
            </div>
        </div>
        </>
    )
}