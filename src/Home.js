import React, { useRef } from "react";
import "./Home.css"
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io"
import { Link, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Input from "./Input";
import Selecttheme from "./Selecttheme";
import About from "./About";

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
       <div className="heading">Resume Builder</div>
        <div className="home-main">
          <div className="home-head">Get your developer style resume ready with React Resume Builder</div>
          <div>
            All new platform to build developer style resume in just few seconds.
          </div>
          <div className="img-home">
            <img src={`${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/storage/files/${"ef039e96-06fc-48ac-9672-ef73fe208087"}`} alt=""></img>
            <img src={`${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/storage/files/${"1a465330-3f79-4dda-8939-2f70bda0ea55"}`} alt=""></img>
            <img src={`${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/storage/files/${"8c8cc0ee-8a8a-47b6-b003-c7974cf8926f"}`} alt=""></img>
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

        <Route path='/about' element={<About/>} />
        <Route path='/resumebuild' element={<Input/>} />
        <Route path='/selecttheme' element={<Selecttheme/>} />
      </Routes>
    </>
  );
}

export default Home;
