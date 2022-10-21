import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Header.css"

function Header(props) {

  const location = useLocation()

  return (
    <>
      <div className='header'>
        <div><Link to={"/"} className="link"><div className='logo'>R</div></Link></div>
        <div>
          {location.pathname === "/" || location.pathname === "/about" ? <div><Link to={"/resumebuild"} className="link"><div>Start</div></Link></div> : null}
          {location.pathname === "/" ? <div onClick={() => props.handleclick()}>Contact</div> : null}
          <div><Link to={"/about"} className="link"><div>About</div></Link></div>
        </div>
      </div>

    </>
  )
}

export default Header