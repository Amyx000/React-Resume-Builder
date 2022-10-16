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
import { Link } from 'react-router-dom'

function Minimalist() {
    const themeclr = "#3B6C8F"
    const smallclr = "#F26464"
    const [loading, setLoading] = useState(true);

    const loadFunc = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        loadFunc()
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

    const print = () => {
        window.print()
    }

    return (
        <>
            {loading ? <BounceLoader className='loader' color="#643baa" size={150} /> :
                <>
                    <div className='noprint'>
                        <Link to={"/resumebuild"}><button className='print-btn'>Edit Data</button></Link>
                        <Link to={"/selecttheme"}><button className='print-btn'>Change theme</button></Link>
                        <button className='print-btn' onClick={print}>Download</button>
                    </div>
                    <div className='theme4'>

                        <div style={{ "borderColor": themeclr }}>

                            <div className='theme4-imgdiv' >
                                <img style={{ "color": themeclr }} src={userdata.personal.image} alt=""></img>
                            </div>

                            <div className='theme4-sec'>
                                <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                                    <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                                    <div className='theme4-head' style={{ "color": themeclr }}>SKILLS</div>
                                </div>
                                <div className='theme4-content'>
                                    {userdata.personal.technicalskill.map((item, index) => {
                                        return (
                                            <div style={{ "width": "100%" }}>
                                                <div style={{ "padding": "5px 10px", "backgroundColor": "#9CB5C6", "borderRadius": "5px", "width": `${(item.rate / 10) * 100}%` }} key={index}>{item.skill}</div>
                                            </div>
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
                                    <ul>
                                        {userdata.personal.interest.map((item, index) => {
                                            return (
                                                <li className={"ml-6"} style={{ "listStyle": "circle outside" }} key={index}>{item.hobbie}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div>

                            <div>
                                <div className={"text-3xl"} style={{ "color": themeclr }}>{userdata.personal.name} {userdata.personal.lastname}</div>
                                <div style={{ "color": smallclr, "fontSize": "15px" }}>{userdata.personal.title}</div>
                                <div className={"pt-2 pb-2"}>{userdata.personal.quote}</div>
                                <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "rowGap": "10px" }}>
                                    <div className='theme4-icondiv'>
                                        <IoMdMail style={{ color: smallclr }} />
                                        <div>{userdata.personal.email}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <BiMobileAlt style={{ color: smallclr }} />
                                        <div>{userdata.personal.mob}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <MdLocationOn style={{ color: smallclr }} />
                                        <div>{userdata.personal.city}, {userdata.personal.country}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <GrLinkedinOption style={{ color: smallclr }} />
                                        <div>{userdata.link.linkedin}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <AiFillGithub style={{ color: smallclr }} />
                                        <div>{userdata.link.github}</div>
                                    </div>
                                    {userdata.link.portfolio ? <div className='theme4-icondiv'>
                                        <AiOutlineLink style={{ color: smallclr }} />
                                        <div>{userdata.link.portfolio}</div>
                                    </div> : null}
                                </div>
                            </div>

                            <div className='theme4-sec'>
                                <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                                    <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                                    <div className='theme4-head' style={{ "color": themeclr }}>WORK EXPERIENCE</div>
                                </div>
                                <div className='theme4-content'>
                                    {userdata.experience.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.worktitle}</div>
                                                <div style={{ "fontSize": "14px" }}>{item.company}</div>
                                                <div className='text-xs italic' style={{ "color": smallclr }}>{item.yearfrom} - {item.present === true ? "Present" : item.yearto}</div>
                                                <ul>
                                                    <li className={"ml-4"} style={{ "listStyle": "circle outside" }}>{item.description}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {userdata.project[0].name ? <div className='theme4-sec'>
                                <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                                    <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                                    <div className='theme4-head' style={{ "color": themeclr }}>PROJECTS</div>
                                </div>
                                <div className='theme4-content'>
                                    {userdata.project.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div style={{ "fontSize": "14px" }}>{item.name}</div>
                                                <div className={"text-xs"} style={{ color: smallclr }}>{item.tech}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div> : null}

                            {userdata.course[0].name ? <div className='theme4-sec'>
                                <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                                    <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                                    <div className='theme4-head' style={{ "color": themeclr }}>COURSES & TRAINING</div>
                                </div>
                                <div className='theme4-content'>
                                    {userdata.course.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div style={{ "fontSize": "14px" }}>{item.name}</div>
                                                <div className={"text-xs"} style={{ color: smallclr }}>{item.provider}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div> : null}

                            <div className='theme4-sec'>
                                <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", gap: "7px" }}>
                                    <CgShapeRhombus className={"text-lg"} style={{ "color": themeclr }} />
                                    <div className='theme4-head' style={{ "color": themeclr }}>EDUCATION</div>
                                </div>
                                <div className='theme4-content'>
                                    {userdata.education.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.degree}</div>
                                                <div style={{ "fontSize": "14px" }}>{item.university}</div>
                                                <div className='text-xs italic edu-grade' style={{ color: smallclr }}>
                                                    <div>{item.yearfrom} - {item.yearto}</div>
                                                    <div>{item.grade}{item.gradetype === "grade" ? "/10" : "%"}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </>}
        </>
    )
}

export default Minimalist