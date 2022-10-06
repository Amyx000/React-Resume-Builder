import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import "./Header.css"
import Home from './Home'
import Input from './Input'
import Selecttheme from './Selecttheme'

function Header() {
    
    // const scrollTo = (elementRef)=>{
        
    //     elementRef.current.scrollIntoView({behavior:'smooth'})     
        
    // }
  return (
    <>
        <div className='header'>
            <div><Link to={"/"} className="link"><div className='logo'>R</div></Link></div>
            <div>Templates</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/resumebuild' element={<Input/>}/>
                <Route path='/selecttheme' element={<Selecttheme/>}/>
            </Routes>
    </>
  )
}

export default Header