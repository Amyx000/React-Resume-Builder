import React from 'react'
import { Link } from 'react-router-dom'
import "./Selecttheme.css"

function Selecttheme() {
    
    return (
        <>
            <div className='theme-header'>Select Theme</div>
            <div className='theme-main'>
                {[1, 2, 3,4].map((item) => {
                    return (
                        <div tabIndex={item}>
                            <img src='https://d.novoresume.com/images/doc/simple-resume-template.png' alt></img>
                            <div>{item}</div>
                        </div>
                    )
                })}
            </div>
            <div className='btn-div'>
                <Link to={"/resumebuild"} className="link"><button className='btn'>Back</button></Link>
                <Link to={`/theme${1}/download`} className="link"><button className='btn'>Proceed</button></Link>
            </div>
        </>
    )
}

export default Selecttheme