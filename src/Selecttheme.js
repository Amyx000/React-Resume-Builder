import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Selecttheme.css"

function Selecttheme() {
    const[clickindex,Setclickindex]=useState("")
    console.log(clickindex)

    const themedata = [
        {
            "themename": "Professional",
            "img": "https://i.pinimg.com/originals/42/4b/ef/424bef6e0ddacab678afb3738f34bf68.png",
            "colors": ["#52A589", "#7895B2", "#B1B2FF", "#FF9494", "#886F6F", "#FF87CA", "#1572A1", "#905E96", "#92A9BD"]
        },
        {
            "themename": "Classic",
            "img": "https://d.novoresume.com/images/doc/simple-resume-template.png",
            "colors": ["#52A589", "#7895B2"]
        }
    ]

    return (
        <>
            <div className='theme-header'>Select Theme</div>
            <div className='theme-main'>
                {themedata.map((item, index) => {
                    return (
                        <div key={index} onClick={()=>Setclickindex(index)} tabIndex={index}>
                            <img src={item.img} alt=""></img>
                            <div>{item.themename}</div>
                        </div>
                    )
                })}
                <div className='theme-main-msg'>More theme will available soon</div>
            </div>

            {clickindex!==""?
            <>
            <div className='theme-header'>Select Theme Color</div>
            <div className='clr-select'>
                {themedata[clickindex].colors.map((color, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" value={index} name="color" />
                            <div style={{backgroundColor:`${color}`,width:"40px",height:"40px",borderRadius:"4px"}}></div>
                        </div>
                    )
                })}
            </div>
            </>:null}

            <div className='btn-div'>
                <Link to={"/resumebuild"} className="link"><button className='btn'>Back</button></Link>
                <Link to={`/theme${1}/download`} className="link"><button className='btn'>Proceed</button></Link>
            </div>
        </>
    )
}

export default Selecttheme