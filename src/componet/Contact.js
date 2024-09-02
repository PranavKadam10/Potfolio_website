import Navbar from "./Navbar"
import '../css/Contact.css'
export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="row">
            <div className="column" style={{padding:'50px', textAlign:'center'}}>
                <h1 style={{padding:'20px'}}>CONTACT</h1>
                <h2>Feel free to reach out !</h2>
            </div>
            <div className="column" style={{textAlign:'start', padding:'auto'}}>
                <div style={{padding:'15px 0px', display:'flex'}}>
                    <img src="images/gmail.png" style={{height:'24px', margin:'5px 10px'}}/>
                    <h2>pranav10.kadam@gmail.com</h2>
                </div>
                <div style={{padding:'15px 0px', display:'flex'}}>
                    <img src="images/linkedin.png" style={{height:'24px', margin:'5px 10px'}}/>
                    <h2>linkedin.com/in/pranav-kadam</h2>
                </div>
                <div style={{padding:'10px 0px', display:'flex'}}>
                    <img src="images/github.png" style={{height:'24px', margin:'5px 10px'}}/>
                    <h2>github.com/PranavKadam10</h2>
                </div>
            </div>
        </div>
        </>
    )
}