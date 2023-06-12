import React, { useState, useEffect } from "react";
import "./App.css"

const Nav =()=>{
return(
  <div id="navdiv">
    <span id="dd">DD</span>
    <nav className="nav">
      <li className="navbutt" href="" >home</li>
      <li className="navbutt" href="" >aboutMe</li>
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
const App = () => {
  return (
    <div>
    <Nav />
    <Home />
    </div>
  );
};

export default App;
