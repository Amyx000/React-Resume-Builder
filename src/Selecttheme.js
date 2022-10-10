import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Selecttheme.css"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { getthemedata } from './Redux/Reducers/themeReducer';

function Selecttheme() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [clickindex, Setclickindex] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [cardselect,Setcardselect]=useState("")
    console.log(clickindex)

    const onSubmit = (data) => {
        console.log(data);
        dispatch(getthemedata(data))
        navigate(`/theme${clickindex + 1}/download`)
    }

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

    const radioinputFunc=(e)=>{
        if(e.target.checked){
            Setcardselect("card-selected")
        }
    }
    const clickFunc=()=>{
        if(clickindex!==""){
            Setcardselect("card-selected")
        }
    }

    useEffect(() => {
      clickFunc()
    }, )
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='theme-header'>Select Theme</div>
                <div className='theme-main'>
                    {themedata.map((item, index) => {
                        return (
                            <div className={index===clickindex?cardselect:""} onClick={() => {Setclickindex(index);clickFunc()}} key={index} tabIndex={index}>
                                <img src={item.img} alt=""></img>
                                <div>{item.themename}</div>
                                <input type={"radio"} {...register("theme",{required:true})} value={item.themename} checked={index===clickindex?true:false} onClick={() => Setclickindex(index)} onChange={radioinputFunc} name="theme" />
                            </div>
                        )
                    })}
                    <div className='theme-main-msg'>More theme will available soon</div>
                </div>
                {errors.theme?
                    <div className='theme-err'>Select the theme</div> : null}

                {clickindex !== "" ?
                    <>
                        <div className='theme-header'>Select Theme Color</div>
                        <div className='clr-select'>
                            {themedata[clickindex].colors.map((color, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" {...register("color", { required: true })} value={color} name="color" />
                                        <div style={{ backgroundColor: `${color}`}}></div>
                                    </div>
                                )
                            })}
                        </div>
                        {errors.color ?
                            <div className='theme-err'>Select the theme color</div> : null}
                    </> : null}

                <div className='btn-div'>
                    <Link to={"/resumebuild"} className="link"><button className='btn'>Back</button></Link>
                    <button type='submit' className='btn'>Proceed</button>
                </div>
            </form>
        </>
    )
}

export default Selecttheme