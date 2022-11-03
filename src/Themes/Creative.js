import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoMdMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BounceLoader from 'react-spinners/BounceLoader'
import "./Creative.css"

function Creative() {
  const [loading, setLoading] = useState(true);
  const themeclr = useSelector(state => state.theme?.theme?.color)||"#643baa"
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
          <div className='theme3'>
            <div className='theme3-top'>
              <div>
                <div className={"text-3xl"}>{userdata.personal.name} {userdata.personal.lastname}</div>
                <div style={{ color: themeclr, "fontSize": "19px" }}>{userdata.personal.title}</div>
                <div className={"mt-2"}>{userdata.personal.quote}</div>
              </div>
              <div style={{ "border": `2px solid ${themeclr}`, "borderRadius": "40px" }}>
                <img src={userdata.personal.image} alt=''></img>
              </div>
            </div>

            <div className='theme3-sec2'>
              <div className='theme3-sec2-icons'>
                <IoMdMail style={{ color: themeclr }} />
                <div>{userdata.personal.email}</div>
              </div>
              <div className='theme3-sec2-icons'>
                <BiMobileAlt style={{ color: themeclr }} />
                <div>{userdata.personal.mob}</div>
              </div>
              <div className='theme3-sec2-icons'>
                <MdLocationOn style={{ color: themeclr }} />
                <div>{userdata.personal.city}, {userdata.personal.country}</div>
              </div>
              <div>
                {userdata.link.portfolio ? <div className='theme3-sec2-icons'>
                  <AiOutlineLink style={{ color: themeclr }} />
                  <div>{userdata.link.portfolio}</div>
                </div> : null}
                <div className='theme3-sec2-icons'>
                  <GrLinkedinOption style={{ color: themeclr }} />
                  <div>{userdata.link.linkedin}</div>
                </div>
                <div className='theme3-sec2-icons'>
                  <AiFillGithub style={{ color: themeclr }} />
                  <div>{userdata.link.github}</div>
                </div>
              </div>
            </div>

            <div className='theme3-sec3'>
              <div style={!userdata.experience[0].company ? { "gridColumn": "2/3" } : null}>

                {userdata.experience[0].company ? <div className='theme3-sec'>
                  <div className='theme3-head' style={{ "color": themeclr }}>WORK EXPERIENCE</div>
                  <div className='theme3-sec-content'>
                    {userdata.experience.map((item, index) => {
                      return (
                        <div key={index}>
                          <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.worktitle}</div>
                          <div style={{ "fontSize": "14px" }}>{item.company}</div>
                          <div className='text-xs italic' style={{ "color": themeclr }}>{item.yearfrom} - {item.present === true ? "Present" : item.yearto}</div>
                          <ul>
                            <li className={"ml-4"} style={{ "listStyle": "disc outside" }}>{item.description}</li>
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div> : null}

                <div className='theme3-sec'>
                  <div className='theme3-head' style={{ "color": themeclr }}>EDUCATION</div>
                  <div className='theme3-sec-content'>
                    {userdata.education.map((item, index) => {
                      return (
                        <div key={index}>
                          <div style={{ "fontWeight": "bold", "fontSize": "14px" }}>{item.degree}</div>
                          <div style={{ "fontSize": "14px" }}>{item.university}</div>
                          <div className='text-xs italic edu-grading' style={{ color: themeclr }}>
                            <div>{item.yearfrom} - {item.yearto}</div>
                            <div>{item.grade}{item.gradetype === "grade" ? "/10" : "%"}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>

              <div style={!userdata.experience[0].company ? { "gridColumn": "1/2", "gridRow": "1/2" } : null}>

                <div className='theme3-sec'>
                  <div className='theme3-head' style={{ "color": themeclr }}>SKILLS</div>
                  <div className='theme3-sec-content'>
                    <div className='theme3-skill'>
                      {userdata.personal.technicalskill.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div>{item.skill}</div>
                            <div className='theme3-rate'>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    {item.rate < i ? <div className='theme3-ratediv' style={{ "color": themeclr }}><div className='theme3-ratediv-inner'></div></div> :
                                      <div className='theme3-ratediv' style={{ "color": themeclr }}><div className='theme3-ratediv-inner' style={{ "color": themeclr, "backgroundColor": themeclr }}></div></div>}
                                  </React.Fragment>

                                )
                              })}
                            </div>
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {userdata.project[0].name ? <div className='theme3-sec'>
                  <div className='theme3-head' style={{ "color": themeclr }}>PROJECTS</div>
                  <div className='theme3-sec-content'>
                    {userdata.project.map((item, index) => {
                      return (
                        <div key={index}>
                          <div style={{ "fontSize": "14px", "fontWeight": "bold" }}>{item.name}</div>
                          <div className={"text-xs"} style={{ color: themeclr }}>{item.tech}</div>
                          {item.des?<div className={'mt-1'}>{item.des}</div>:null}
                        </div>
                      )
                    })}
                  </div>
                </div> : null}

                {userdata.course[0].name ? <div className='theme3-sec'>
                  <div className='theme3-head' style={{ "color": themeclr }}>COURSES & TRAINING</div>
                  <div className='theme3-sec-content'>
                    {userdata.course.map((item, index) => {
                      return (
                        <div key={index}>
                          <div style={{ "fontSize": "14px", "fontWeight": "bold" }}>{item.name}</div>
                          <div className={"text-xs"} style={{ color: themeclr }}>{item.provider}</div>
                        </div>
                      )
                    })}
                  </div>
                </div> : null}

              </div>
            </div>
          </div>
        </>}
    </>
  )
}

export default Creative