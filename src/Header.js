import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

function Header(props) {
    
  return (
    <>
        <div className='header'>
            <div><Link to={"/"} className="link"><div className='logo'>R</div></Link></div>
            <div><Link to={"/resumebuild"} className="link"><div>Build Resume</div></Link></div>
            <div>About</div>
            <div onClick={()=>props.handleclick()}>Contact</div>
        </div>
        
    </>
  )
}

export default Header