import React, { useRef } from "react";
import "./Home.css"
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io"
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Input from "./Input";
import Selecttheme from "./Selecttheme";

function Home() {

  const scollToRef = useRef();

  const scrollFunc = () => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header handleclick={scrollFunc}/>
      <Routes>
       <Route path='/' element={
       <>
        <div className="home-main">
          <div className="home-head">Get your developer style resume ready with React Resume Builder</div>
          <div>
            All new platform to build developer style resume in just few seconds.
          </div>
          <div>
            <img src="https://d.novoresume.com/images/landing_page/templates/template0.png" alt=""></img>
            <img src="https://d.novoresume.com/images/landing_page/templates/template1.png" alt=""></img>
            <img src="https://d.novoresume.com/images/landing_page/templates/template2.png" alt=""></img>
          </div>
          <div className="steps">
            <div>Follow the steps</div>
            <div>
              <div className="step-head">Step 1:</div>
              <div>Input all your details</div>
              <div>Select the template you want</div>
              <div className="step-head">:Step 2</div>
              <div className="step-head">Step 3:</div>
              <div>Your resume is ready to download</div>
              <div>Click on download</div>
              <div className="step-head">:Step 4</div>
            </div>
          </div>
          <div className="started">
            <div className="home-subheading">Are you ready?</div>
            <Link to={"/resumebuild"} className="link"><button className="started-btn">Get started</button></Link>
          </div>

        </div>
        <div className="contact" ref={scollToRef}>
          <div>Get in Touch</div>
          <div>
            <a href="https://twitter.com/Armankazi111" className="link"><IoLogoTwitter className="social-icon" /></a>
            <a href="https://github.com/Amyx000" className="link"><IoLogoGithub className="social-icon" /></a>
          </div>
        </div>
        </>} />

        
        <Route path='/resumebuild' element={<Input />} />
        <Route path='/selecttheme' element={<Selecttheme />} />
      </Routes>
    </>
  );
}

export default Home;
