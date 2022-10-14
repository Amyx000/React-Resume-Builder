import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoMdMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { CgShapeRhombus } from "react-icons/cg"
import BounceLoader from 'react-spinners/BounceLoader'
import { userdata } from '../data'
import "./Minimalist.css"

function Minimalist() {
    const themeclr = "#3B6C8F"
    return (
        <>
            <div className='theme4'>

                <div style={{"borderColor":themeclr}}>

                    <div className='theme4-imgdiv' style={{ "width": "max-content", "aspectRatio": "1", "border": `2px solid ${themeclr}`, "borderRadius": "50%" }}>
                        <img src={userdata.personal.image} alt=""></img>
                    </div>

                    <div className='theme4-sec'>
                        <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                            <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                            <div className='theme4-head' style={{ "color": themeclr }}>SKILLS</div>
                        </div>
                        <div className='theme4-content'>
                            {userdata.personal.technicalskill.map((item, index) => {
                                return (
                                    <div key={index}>{item.skill}</div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='theme4-sec'>
                        <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                            <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                            <div className='theme4-head' style={{ "color": themeclr }}>INTERESTS</div>
                        </div>
                        <div className='theme4-content'>
                            {userdata.personal.interest.map((item, index) => {
                                return (
                                    <div key={index}>{item.hobbie}</div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div style={{"backgroundColor":"red"}}>b</div>
            </div>
        </>
    )
}

export default Minimalist