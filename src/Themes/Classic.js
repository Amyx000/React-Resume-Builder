import React, { useState } from 'react'
import "./Classic.css"
import { IoMdMail } from 'react-icons/io'
import { BiMobileAlt, BiSquare } from 'react-icons/bi'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import BounceLoader from 'react-spinners/BounceLoader'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Classic() {
    const themeclr = useSelector(state => state.theme?.theme?.color) || "#643baa"
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const userdata = useSelector(state => state.user.userdata)
    const [loadhint, setloadhint] = useState("")

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
                    <div className='theme2'>
                        <div className={"mb-4"}>
                            <div>
                                <div className='text-3xl' style={{ color: themeclr, "fontWeight": "bold" }}>{userdata.personal.name} {userdata.personal.lastname}</div>
                                <div style={{ color: themeclr, "fontSize": "19px" }}>{userdata.personal.title}</div>
                                <div className={"mt-1 text-left"}>{userdata.personal.quote} asja akjks let check it out how the css is working
                                    is it working fine? has been the industry's</div>
                            </div>
                            <div>
                                <div>{userdata.personal.email}</div><IoMdMail style={{ color: themeclr }} />
                                <div>{userdata.personal.mob}</div><BiMobileAlt style={{ color: themeclr }} />
                                <div>{userdata.personal.city}, {userdata.personal.country}</div><MdLocationOn style={{ color: themeclr }} />
                                <div>{userdata.link.linkedin}</div><GrLinkedinOption style={{ color: themeclr }} />
                                <div>{userdata.link.github}</div><AiFillGithub style={{ color: themeclr }} />
                            </div>
                        </div>

                        <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>SKILLS</div>
                            <div className='section-content'>
                                <div className='theme2-interest'>
                                    {userdata.personal.technicalskill.map((item, index) => {
                                        return (
                                            <div key={index} style={{ "backgroundColor": themeclr, "borderRadius": "5px", "padding": "3px", "fontSize": "12px" }}>{item.skill}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {userdata.experience[0].company ? <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>WORK EXPERIENCE</div>
                            <div className='section-content'>
                                {userdata.experience.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='font-bold' style={{ "fontSize": "14px" }}>{item.worktitle}</div>
                                            <div style={{ "fontSize": "14px" }}>{item.company}</div>
                                            <div className='text-xs italic' style={{ color: themeclr }}>{item.yearfrom} - {item.present === true ? "Present" : item.yearto}</div>
                                            <div>
                                                - {item.description}
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        {userdata.project[0].name ? <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>PROJECTS</div>
                            <div className='section-content'>
                                {userdata.project.map((item, index) => {
                                    return (
                                        <div key={index} className='theme2-proj'>
                                            <BiSquare style={{ color: themeclr }} />
                                            <div>
                                                <div className='resume-title' style={{ "fontWeight": "bold" }}>{item.name}</div>
                                                <div className={"text-xs"} style={{ color: themeclr }}>{item.tech}</div>
                                                {item.des ? <div className={'mt-1'}>{item.des}</div> : null}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>EDUCATION</div>
                            <div className='section-content'>
                                {userdata.education.map((item, index) => {
                                    return (
                                        <div key={index} className='theme2-edu'>
                                            <div className='font-bold resume-title' style={{ color: themeclr }}>{item.degree}</div>
                                            <div className='resume-title'>{item.university}</div>
                                            <div className='text-xs italic' style={{ color: themeclr }}>
                                                <div>{item.yearfrom} - {item.yearto}</div>
                                                <div>{item.grade}{item.gradetype === "grade" ? "/10" : "%"}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {userdata.course[0].name ? <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>COURSES</div>
                            <div className='section-content'>
                                {userdata.course.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='resume-title' style={{ "fontWeight": "bold" }}>{item.name}</div>
                                            <div className={"text-xs"} style={{ color: themeclr }}>{item.provider}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        <div className='theme2-section'>
                            <div className='section-head' style={{ "color": themeclr }}>INTERESTS/HOBBY</div>
                            <div className='section-content'>
                                <ul style={{ "display": "grid", "justifyItems": "center", "gridTemplateColumns": "repeat(auto-fit, minmax(25%,1fr)", "paddingBottom": "20px" }}>
                                    {userdata.personal.interest.map((item, index) => {
                                        return (
                                            <li key={index} style={{ "listStyle": "outside disc" }}>{item.hobbie}</li>
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

export default Classic