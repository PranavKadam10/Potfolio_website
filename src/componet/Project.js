import React from "react"
import Navbar from "./Navbar"
import '../css/Project.css'
export default function Project(){
    return(
        <>
        <Navbar/>
        <div style={{height:'640px', backgroundColor:'rgb(234, 212, 185', textAlign:'center', padding:'50px 0'}}>
            <h1 style={{margin:'10px 0 20px 0'}}>PROJECTS</h1>
        <div className="row3">
            <div className="column3" >
                <img src="images\coding.jpg" style={{height:'200px', width:'100%'}}/>
                <h3 style={{margin:'10px'}}>Project 1</h3>
                <h2>MEDIC Template Clone</h2>
                <p style={{margin:'10px'}}>This website Create using Html and Css  </p>
                <span className="spa">HTML 5</span>
                <span className="spa">CSS 3</span>
            </div>
            <div className="column3" >
                <img src="images\coding.jpg" style={{height:'200px', width:'100%'}}/>
                <h3 style={{margin:'10px'}}>Project 2</h3>
                <h2>WALLET Template Clone</h2>
                <p style={{margin:'10px'}}>This website Create using Html, Css and Bootstrap  </p>
                <span className="spa">HTML 5</span>
                <span className="spa">CSS 3</span>
                <span className="spa">Bootstrap</span>
            </div>
            <div className="column3" >
                <img src="images\coding.jpg" style={{height:'200px', width:'100%'}}/>
                <h3 style={{margin:'10px'}}>Project 3</h3>
                <h2>Potfolio website</h2>
                <p style={{margin:'10px'}}>This website Create using Html, Css and React  </p>
                <span className="spa">HTML 5</span>
                <span className="spa">CSS 3</span>
                <span className="spa">REACT</span>
            </div>
        </div>
        </div>
        </>
    )
}