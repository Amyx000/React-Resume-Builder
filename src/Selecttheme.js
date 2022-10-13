import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Selecttheme.css"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { getthemedata } from './Redux/Reducers/themeReducer';
import axios from "axios"

function Selecttheme() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [clickindex, Setclickindex] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [cardselect, Setcardselect] = useState("")
    const [themedata,Setthemedata]=useState([])
    const[selected,Setselected]=useState({themename:"",color:""})

    const onSubmit = () => {
        dispatch(getthemedata(selected))
        navigate(`/theme-${selected.themename.toLocaleLowerCase()}/download`)
    }


    const radioinputFunc = (e) => {
        if (e.target.checked) {
            Setcardselect("card-selected")
        }
    }
    

    useEffect(() => {
        async function getthemes() {
            try {
                const res = await axios.post(`${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/graphql`, {
                    "query": `query fetchtheme {
                    themes {
                      themename
                      img
                      colors
                      id
                    }
                  }`
                })
                Setthemedata(res.data.data.themes)
            } catch (error) {
                console.log(error)
            }
        }
        getthemes()
    }, [])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='theme-header'>Select Theme</div>
                <div className='theme-main'>
                    {themedata.map((item, index) => {
                        return (
                            <div className={index === clickindex ? cardselect : ""} onClick={() => { Setclickindex(index); Setselected(e=>({...e,themename:item.themename}));Setcardselect("card-selected") }} key={index}>
                                <img src={`${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/storage/files/${item.img}`} alt=""></img>
                                <div>{item.themename}</div>
                                <input type={"radio"} {...register("theme", { required: true })} value={item.themename} checked={index === clickindex ? true : false} onClick={() => Setclickindex(index)} onChange={radioinputFunc} name="theme" />
                            </div>
                        )
                    })}
                    <div className='theme-main-msg'>More theme will available soon</div>
                </div>
                {errors.theme ?
                    <div className='theme-err'>Select the theme</div> : null}

                {clickindex !== "" ?
                    <>
                        <div className='theme-header'>Select Theme Color</div>
                        <div className='clr-select'>
                            {themedata[clickindex].colors.split(",").map((color, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" {...register("color", { required: true })} value={color} name="color" onChange={(e)=>Setselected(prev=>({...prev,color:e.target.value}))} />
                                        <div style={{ backgroundColor: `${color}` }}></div>
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