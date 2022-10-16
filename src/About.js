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

        <div className={"mt-3"}>
          Special Thanks to all who has made some great effort creating such amazing usefull packages, and also to React Play
          team who has organized this amazing hackathon.
        </div>
        <a className={"mt-2 anchor-link"} href={"https://hustles.reactplay.io/hackrplay/2022/home"} target="_blank" rel="noopener noreferrer">Hack-R-Play Website</a>
        <a className={"mt-2 anchor-link"} href={"https://github.com/Amyx000/React-Resume-Builder"} target="_blank" rel="noopener noreferrer">Star our Github Repo</a>
        <a className={"mt-2 anchor-link"} href={"/"} target="_blank" rel="noopener noreferrer">React Resume Builder Blog</a>
      </div>
    </>
  )
}

export default About