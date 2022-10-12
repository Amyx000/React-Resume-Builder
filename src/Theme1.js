import React, { useEffect, useState } from 'react'
import "./Theme1.css"
import { AiOutlineLink, AiFillGithub } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { BiMobileAlt, BiSquare } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md"
import { GrLinkedinOption } from "react-icons/gr"
// import { userdate } from "./data"

function Theme1() {
    const themes = ["#52A589","#7895B2","#B1B2FF","#FF9494","#886F6F","#FF87CA","#1572A1","#905E96","#92A9BD"]
    const [themeclr, Setthemeclr] = useState(themes[8])

    useEffect(() => {
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

    const print =()=>{
        window.print()
    }

    return (
        <>
        <div className='noprint'><button className='print-btn' onClick={print}>Download</button></div>
        <div className='resume-main'>
            <div className='resume'>
                <div className='sec1'>
                    <div>
                        <img className='resume-img' src='https://eshendetesia.com/images/technicals-profile/411adc21b286c742b2adee87ab06a24e.png' alt=''></img>
                    </div>
                    <div>
                        <IoMdMail style={{ color: themeclr }} />
                        <div>amykazi123@gmail.com</div>
                        <BiMobileAlt style={{ color: themeclr }} />
                        <div>1234567890</div>
                        <MdLocationOn style={{ color: themeclr }} />
                        <div>Mumbai, India</div>
                        <AiOutlineLink style={{ color: themeclr }} />
                        <div>armankazi.com</div>
                        <GrLinkedinOption style={{ color: themeclr }} />
                        <div>linkedin.com/armankazi</div>
                        <AiFillGithub style={{ color: themeclr }} />
                        <div>github.com/armankazi</div>
                    </div>

                    <div>
                        <div className='resume-head' style={{ color: themeclr }}>TECHNICAL SKILLS</div>
                        <div className='resume-list'>Html</div>
                        <div className='ratebar' style={{ color: themeclr }}>
                            <div style={{ width: "100%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>CSS</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "95%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>Javascript</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "80%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>React</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "90%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>Node</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "80%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>Mongodb</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "80%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                        <div className='resume-list'>Redux</div>
                        <div className='ratebar resume-color'>
                            <div style={{ width: "90%", backgroundColor: themeclr, color: themeclr }}></div>
                        </div>
                    </div>

                    <div>
                        <div className='resume-head' style={{ color: themeclr }}>INTERESTS</div>
                        <div className='resume-list'>Chess</div>
                        <div className='resume-list'>Football</div>
                        <div className='resume-list'>Sketching</div>
                        <div className='resume-list'>Internet Surfing</div>
                    </div>
                </div>
                <div className='sec2'>
                    <div className='sec2-first text-white' style={{ backgroundColor: themeclr }}>
                        <div className='text-3xl'>Arman Kazi</div>
                        <div className='py-1 text-base'>Mern Stack Developer</div>
                        <div>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor at
                            Hampden-Sydney College in Virginia
                        </div>
                    </div>
                    <div className='r-padding'>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>WORK EXPERIENCE</div>
                        <div>
                            {[1, 2].map(() => {
                                return (
                                    <div>
                                        <div className='font-bold resume-title' style={{ color: themeclr }}>Web Developer</div>
                                        <div className="resume-subhead">Tata Consultancy Services</div>
                                        <div className='text-xs italic' style={{ color: themeclr }}>09/20-Present</div>
                                        <div className='resume-des'>
                                            <BiSquare style={{ color: themeclr }} />
                                            <div>
                                                It has roots in a piece of classical Latin literature from 45 BC,
                                                making it over 2000 years old.
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    <div>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>Personal Projects</div>
                        {[1, 2, 3].map((item) => {
                            return (
                                <div className='resume-des resume-proj'>
                                    <BiSquare style={{ color: themeclr }} />
                                    <div className='resume-courses project'>
                                        <div className='resume-title'>Full stack ecommerce website</div>
                                        <div>React.js, Node.js, Mongodb, Html&CSS</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>{`Courses & Training`}</div>
                        {[1, 2, 3].map((item) => {
                            return (
                                <div className='resume-courses'>
                                    <div className='resume-title'>Full Stack development with MERN</div>
                                    <div>Udemy.com</div>
                                </div>
                            )
                        })}

                    </div>

                    <div className='sec2-last'>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>EDUCATION</div>
                        {[1, 2].map(() => {
                            return (
                                <div className='sec2-last-main'>
                                    <div className='font-bold resume-title' style={{ color: themeclr }}>B.E Chemical Engineer</div>
                                    <div className='resume-title'>Mumbai University</div>
                                    <div className='text-xs italic' style={{ color: themeclr }}>
                                        <div>2017-2021</div>
                                        <div>9.7/10</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Theme1