import React, { useState, useEffect } from "react";
import "./App.css"

const Nav =()=>{
return(
  <div id="navdiv">
    <span id="dd">DD</span>
    <nav className="nav">
      <li className="navbutt" href="#home" >home</li>
      <li className="navbutt" href="#abotme" >aboutMe</li>
      <li className="navbutt" href="" >hireMe</li>
      <li className="navbutt" href="" >contactMe</li>
    </nav>
  </div>
)
}
const Home =()=>{
  return(
    
  <section id="home" style={{ display: "flex", justifyContent:"space-between", marginTop:"40px" }}>
    <div>
     <img id="img1" src="https://i.ibb.co/TknRR9N/userlmn-f3df8ad2807ec54e6667b42d9952896f.png" alt="dd" border="0" /></div>
     <div id="homeTxtDiv" style={{ marginRight: "100px",marginTop:"145px" }}>
      <span className="homeTxt" id="home1">hello!</span><br />
      <span className="homeTxt" id="home2"><a id="im">i'm </a><a id="dheena">dheena dayalan</a></span><br />
      <span className="homeTxt"id="home3">a freelance web developer</span>
      <div>
      <button className="butthireme">HIRE ME</button>
      <button className="buttmyskills">my skills</button>

     </div>
     </div>
     
  </section>)
}
const AboutMe =()=>{
  return(
    <div style={{ marginBottom:"0px", marginTop:"40px"}}>
  <p className="abme">ABOUT ME</p></div>)
}
const AboutMeContent =()=>{
  return(
< section id="abotme" style={{ display: "flex",  marginTop:"00px" }}>
<div id="aliit">
   
    <li className="abliit">Name:</li>
    <li className="abliit">Dob:</li>
    <li className="abliit">Email:</li>
    <li className="abliit">Nationality:</li>
  </div>
  <div id="abandiv">
    <li className="aban">dheena dayalan</li>
    <li className="aban">October15,2005</li>
    <li className="aban">dheenadhayalan5248d@gmail.com</li>
    <li className="aban">Indian</li>

  </div>
  <div id="img2div" style={{ marginTop: "-150px" }}>
     <img id="img2" src="https://i.ibb.co/KrswXb1/userlmn-c4f4ba50d98beb6ab451b6839f7fcf4f.png" alt="dd" border="0" /></div>
</section>)
}


const App = () => {
  return (
    <div>
    <Nav />
    <Home />
    <AboutMe />
    <AboutMeContent />
    </div>
  );
};

export default App;
