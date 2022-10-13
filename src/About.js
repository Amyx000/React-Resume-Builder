import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
          This is react resume builder made by Arman Kazi for Hack-R-Play Hackathon organized by ReactPlay 
          and sponsored by NHost. This project is made by using complete React.js with poppular 
          react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons 
          and Nhost services like Postgres Database, GraphQl API and Storage has been used.
          <br/>
          Special Thanks to all who has made some great effort creating such amazing usefull packages.
          <br/>
          <a href={"https://hustles.reactplay.io/hackrplay/2022/home"} target="_blank">Hack-R-Play Website</a>
          <a href={"https://github.com/Amyx000/React-Resume-Builder"} target="_blank">Star our Github Repo</a>
          <a href={""} target="_blank">React Resume Builder Blog</a>
      </div>
    </>
  )
}

export default About