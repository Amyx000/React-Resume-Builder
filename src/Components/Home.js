import React, { useRef } from "react";
import "./Home.css";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import creative from "../assets/creative.png";
import minimalist from "../assets/minimalist.png";
import professional from "../assets/professional.png";

function Home() {
  const scollToRef = useRef();
  const scrollFunc = () => {
    scollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header handleclick={scrollFunc} />

      <div className="heading">Resumact</div>
      <div className="home-main">
        <div className="home-head">
          Get your developer style resume ready with React Resume Builder
        </div>
        <div>
          All new platform to build developer style resume in just few seconds.
        </div>
        <div className="img-home">
          <img src={creative} alt="" />
          <img src={minimalist} alt="" />
          <img src={professional} alt="" />
        </div>
        <div className="steps">
          <div>Follow the steps</div>
          <div>
            <div className="step-head">Step 1:</div>
            <div className="step-subhead">Input all your details</div>
            <div className="step-subhead">Select the template you want</div>
            <div className="step-head">:Step 2</div>
            <div className="step-head">Step 3:</div>
            <div className="step-subhead">Your resume is ready to download</div>
            <div className="step-subhead">Click on download</div>
            <div className="step-head">:Step 4</div>
          </div>
        </div>
        <div className="started">
          <div className="home-subheading">Are you ready?</div>
          <Link to={"/resumebuild"} className="link">
            <button className="started-btn">Get started</button>
          </Link>
        </div>
      </div>
      <div className="contact" ref={scollToRef}>
        <div>Get in Touch</div>
        <div>
          <a
            href="https://twitter.com/Armankazi111"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <IoLogoTwitter className="social-icon" />
          </a>
          <a
            href="https://github.com/Amyx000"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <IoLogoGithub className="social-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
