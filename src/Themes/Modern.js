import React from 'react'
import "./Modern.css"
import { IoMdMail } from 'react-icons/io'
import { BiMobileAlt } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BsListStars } from 'react-icons/bs'
import { MdOutlineWorkOutline } from "react-icons/md"
import { HiOutlineAcademicCap, HiOutlinePuzzle } from "react-icons/hi"
import { IoConstructOutline } from "react-icons/io5"
import { RiMedalLine } from 'react-icons/ri'
import { TbExternalLink } from "react-icons/tb"
import BounceLoader from "react-spinners/BounceLoader"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Modern() {
    const navigate = useNavigate()
    const userdata = useSelector(state => state.user.userdata)
    const themeclr = useSelector(state => state.theme?.theme?.color) || "#643baa"
    const [loading, setLoading] = useState(true);
    const [loadhint, setloadhint] = useState("")
    const [skillstyle, Setskillstyle] = useState("style1")

    const loadFunc = () => {
        const hints = ["Please wait your resume is in process...", "Hint: Entering the complete details will make your resume looks awesome"]
        setLoading(true)
        hints.map((item, index) => {
            return (
                setTimeout(() => {
                    setloadhint(item)
                }, 3000 * index)
            )
        })
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }

    useEffect(() => {
        if (!userdata.personal) { navigate("/") }
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
        loadFunc()
        // eslint-disable-next-line 
    }, [])

    const print = () => {
        window.print()
    }

    return (
        <>
            {loading ?
                <>
                    <BounceLoader className='loader' color="#643baa" size={150} />
                    <div className='loader-hint mt-2 font-bold'>{loadhint}</div>
                </> :
                <>
                    <div className='noprint'>
                        <Link to={"/resumebuild"}><button className='print-btn'>Edit Data</button></Link>
                        <Link to={"/selecttheme"}><button className='print-btn'>Change theme</button></Link>
                        <button className='print-btn' onClick={print}>Download</button>
                    </div>
                    <div className='theme5'>

                        <div className='theme5-sec'>
                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div>
                                <div className={"text-3xl"} style={{ "fontWeight": "bold", "color": themeclr }}>{userdata.personal.name} {userdata.personal.lastname}</div>
                                <div className={"font-semibold"} style={{ "color": themeclr, "fontSize": "15px" }}>{userdata.personal.title}</div>
                                <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "rowGap": "10px", "margin": "10px 0 20px" }}>
                                    <div className='theme4-icondiv'>
                                        <IoMdMail style={{ color: themeclr }} />
                                        <div>{userdata.personal.email}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <BiMobileAlt style={{ color: themeclr }} />
                                        <div>{userdata.personal.mob}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <MdLocationOn style={{ color: themeclr }} />
                                        <div>{userdata.personal.city}, {userdata.personal.country}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <GrLinkedinOption style={{ color: themeclr }} />
                                        <div>{userdata.link.linkedin}</div>
                                    </div>
                                    <div className='theme4-icondiv'>
                                        <AiFillGithub style={{ color: themeclr }} />
                                        <div>{userdata.link.github}</div>
                                    </div>
                                    {userdata.link.portfolio ? <div className='theme4-icondiv'>
                                        <AiOutlineLink style={{ color: themeclr }} />
                                        <div>{userdata.link.portfolio}</div>
                                    </div> : null}
                                </div>
                                <div>{userdata.personal.quote}</div>
                            </div>
                        </div>

                        {userdata.experience[0].company ? <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><MdOutlineWorkOutline style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>EXPERIENCE</div>
                            </div>

                            {userdata.experience.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white", "padding": "10px 10px 0", "textAlign": "end" }}>{item.yearfrom} - {item.present === true ? "Present" : item.yearto}</div>
                                        <div className='theme5-content-sec'>
                                            <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.worktitle} - <span style={{ "fontSize": "14px", "fontWeight": "400" }}>{item.company}</span></div>
                                            {item.tags ? <>
                                                <div className={"mt-1"}>{item.description}</div>
                                                <div className={"text-xs"} style={{ "color": themeclr }}>{item.tags}</div>
                                            </> :
                                            <>
                                                <div className={"mt-1"}>{item.description}</div>
                                            </>}
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div> : null}

                        {userdata.project[0].name ? <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><IoConstructOutline style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>PROJECTS</div>
                            </div>

                            {userdata.project.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white", "padding": "10px 10px 0" }}>
                                            <div style={{ "display": "flex", "justifyContent": "flex-end" }}>
                                                {item.link && <a href={item.link} target={"_blank"} rel="noopener noreferrer" style={{ "width": "max-content", "display": "flex", "alignItems": "center", "justifyContent": "flex-end", "gap": "5px" }} className={"italic"}>Link<TbExternalLink /></a>}
                                            </div>
                                        </div>
                                        <div className='theme5-content-sec'>
                                            <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.name}</div>
                                            <div className={"mt-1 text-xs"} style={{ "color": themeclr }}>{item.tech}</div>
                                            {item.des ? <div className={'mt-1'}>{item.des}</div> : null}
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div> : null}

                        <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><HiOutlineAcademicCap style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>EDUCATION</div>
                            </div>

                            {userdata.education.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white", "padding": "10px 10px 0", "textAlign": "end" }}>{item.yearfrom} - {item.yearto}</div>
                                        <div className='theme5-content-sec'>
                                            <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "paddingRight": "10px" }}>
                                                <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.degree}</div>
                                                <div className={"text-xs"} style={{ "color": themeclr }}>{item.grade} {item.gradetype === "percentage" ? "%" : "/10"}</div>
                                            </div>
                                            <div className={"mt-1"} style={{ "fontSize": "14px" }}>{item.university}</div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div>

                        {userdata.course[0].name ? <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><RiMedalLine style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>CERTIFICATION & COURSES</div>
                            </div>

                            {userdata.course.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white", "padding": "10px 10px 0", "textAlign": "end" }}></div>
                                        <div key={index} className='theme5-content-sec'>
                                            <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.name}</div>
                                            <div className={"mt-1 text-xs"} style={{ "color": themeclr }}>{item.provider}</div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}

                        </div> : null}

                        <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><HiOutlinePuzzle style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>
                                    SKILLS
                                    <button className='btn-noprint' style={{ "marginLeft": "10px", "padding": "1px 3px", "fontSize": "13px", "backgroundColor": themeclr, "color": "white", "borderRadius": "4px", "fontWeight": "400" }} onClick={() => Setskillstyle((prev) => prev === "style1" ? "style2" : "style1")}>Change Look</button>
                                </div>
                            </div>

                            <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-content-sec'>
                                {skillstyle === "style1" ? <div style={{ "display": "grid", "gridTemplateColumns": "auto 1fr", "alignItems": "center", "rowGap": "5px", "columnGap": "10px" }}>
                                    {userdata.personal.technicalskill.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div>{item.skill}</div>
                                                <div className='ratebar' style={{ color: themeclr, "width": "50%" }}>
                                                    <div style={{ width: `${(item.rate / 10) * 100}%`, backgroundColor: themeclr, color: themeclr }}></div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div> :

                                    <div style={{ "display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "rowGap": "5px" }}>
                                        {userdata.personal.technicalskill.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div style={{ "color": themeclr, "fontSize": "14px" }}>{item.skill}</div>
                                                    <div className={"text-xs"} >{item.rate >= 10 ? "Advanced" : (item.rate < 5 ? "Beginner" : "Intermediate")}</div>
                                                </div>
                                            )
                                        })}
                                    </div>}
                            </div>

                        </div>

                        <div className='theme5-sec'>

                            <div style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-head-sec'>
                                <div style={{ "backgroundColor": themeclr }}><BsListStars style={{ "color": "white", "fontSize": "18px" }} /></div>
                                <div className='theme5-head' style={{ "color": themeclr }}>INTERESTS</div>
                            </div>

                            <div className={"text-xs"} style={{ "backgroundColor": themeclr, "color": "white" }}></div>
                            <div className='theme5-content-sec'>
                                <ul style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1fr 1fr", "paddingBottom": "20px" }}>
                                    {userdata.personal.interest.map((item, index) => {
                                        return (
                                            <li key={index} style={{ "listStyle": "inside disc" }}>{item.hobbie}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>

                    </div>
                </>}
        </>

    )
}

export default Modern