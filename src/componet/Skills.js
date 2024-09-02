import Navbar from "./Navbar";
import '../css/Skills.css';
export default function Skills(){
    return(
        <>
        <Navbar/>
        <div style={{padding:'80px 0px', backgroundColor:'rgb(224, 193, 121)'}}>
        <h1 style={{textAlign:'center', margin:'20px', fontSize:'40px'}}>SKILLS</h1>
        <ul className="skills_div">
            <li>
                <div>
                    <img src="images/html-5.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>HTML 5</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/css3.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>CSS 3</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/bootstrap-logo.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>BOOTSTRAP</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/java-script.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>JAVASCRIPT</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/react.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>REACT</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/python.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>PYTHON</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/icons8-django.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>DJANGO</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/postman.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>POSTMAN</h1>
                </div>
            </li>
            <li>
                <div>
                    <img src="images/mongodb.png" style={{height:'100px'}}/>
                    <h1 style={{fontSize:'40px'}}>MONGODB</h1>
                </div>
            </li>
        </ul>
        </div>
        </>
    )
}