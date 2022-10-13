import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoMdMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { userdata } from '../data'
import "./Creative.css"

function Creative() {
  const themeclr = "#F44F42"
  return (
    <>
      <div className='theme3'>
        <div className='theme3-top'>
          <div>
            <div className={"text-3xl"}>{userdata.personal.name} {userdata.personal.lastname}</div>
            <div style={{ color: themeclr, "fontSize": "19px" }}>{userdata.personal.title}</div>
            <div className={"mt-2"}>{userdata.personal.quote}</div>
          </div>
          <div>
            <img src={userdata.personal.image} alt=''></img>
          </div>
        </div>

        <div className='theme3-sec2'>
          <div>
            <IoMdMail style={{ color: themeclr }} />
            <div>{userdata.personal.email}</div>
          </div>
          <div>
            <BiMobileAlt style={{ color: themeclr }} />
            <div>{userdata.personal.mob}</div>
          </div>
          <div>
            <MdLocationOn style={{ color: themeclr }} />
            <div>{userdata.personal.city}, {userdata.personal.country}</div>
          </div>
          <div>
            <GrLinkedinOption style={{ color: themeclr }} />
            <div>{userdata.link.linkedin}</div>
          </div>
          <div>
            <AiFillGithub style={{ color: themeclr }} />
            <div>{userdata.link.github}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Creative