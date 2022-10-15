import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import "./Input.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clruserdata, getuserdata } from "./Redux/Reducers/userReducer";
import { useNavigate } from "react-router-dom";

function Input() {
    const userredux=useSelector(state=>state.user.userdata)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [present, Setpresent] = useState(false)
    const [grade, Setgrade] = useState("percentage")
    const[hint,Sethint]=useState("hint-hide")
    const emptydata={
        experience: [{
            company: "", description: "", worktitle: "", yearfrom: "", yearto: ""
        }],
        course: [{
            name: "", provider: ""
        }],
        education: [{
            degree: "", grade: "", university: "", yearfrom: "", yearto: "", gradetype: "percentage"
        }],
        personal: {
            technicalskill: [{
                skill: "", rate: ""
            }],
            interest: [{
                hobbie: ""
            }]
        },
        project: [{
            name: "", tech: ""
        }]

    }
    const [filldata,Setfilldata] = useState(userredux.personal?userredux:emptydata)

    const { register, handleSubmit, control, formState: { errors },reset } = useForm(
        {
            defaultValues: filldata
        }
    );

    const {
        fields: interestFields,
        append: interestAppend,
        remove: interestRemove
    } = useFieldArray({ control, name: "personal.interest" });

    const {
        fields: technicalFields,
        append: technicalAppend,
        remove: technicalRemove
    } = useFieldArray({ control, name: "personal.technicalskill" });

    const {
        fields: experienceFields,
        append: experienceAppend,
        remove: experienceRemove
    } = useFieldArray({ control, name: "experience" });

    const {
        fields: courseFields,
        append: courseAppend,
        remove: courseRemove
    } = useFieldArray({ control, name: "course" });

    const {
        fields: educationFields,
        append: educationAppend,
        remove: educationRemove
    } = useFieldArray({ control, name: "education" });

    const {
        fields: projectFields,
        append: projectAppend,
        remove: projectRemove
    } = useFieldArray({ control, name: "personal.interest" });


    useEffect(() => {
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        dispatch(getuserdata(data))
        navigate("/selecttheme")
    }

    const checkboxFunc = (e) => {
        const { checked } = e.target
        Setpresent(checked)
    }

    const clrFunc=()=>{
        dispatch(clruserdata())
        Setfilldata(emptydata)
        reset()
    }
    

    return (
        <>
            <div className="input-header">Enter your details</div>
            <div className="input-main">
                <form className="input-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-head">Personal Details</div>
                    <input  {...register("personal.name", { required: true })} placeholder="Name" />
                    <input {...register("personal.lastname", { required: true })} placeholder="Last Name" />
                    <input type={"date"}  {...register("personal.date", { required: true })} placeholder="Birthdate (dd-mm-yy)" />
                    <input className="input-mob" type={"number"} inputMode={"tel"} {...register("personal.mob", { maxLength: 10, required: true })} placeholder="Mobile No- +91" />
                    <input className="singlefield" type={"email"} inputMode={"email"} {...register("personal.email", { required: true })} placeholder="Email" />
                    <input  {...register("personal.city", { required: true })} placeholder="City" />
                    <input  {...register("personal.country", { required: true })} placeholder="Country" />
                    <input {...register("personal.title", { required: true })} placeholder="Professional Title e.g Full Stack Developer" />
                    <input {...register("personal.quote", { required: true })} placeholder="Describe yourself in one or two line" />
                    <div className="singlefield form-img">
                        <input type={"url"} {...register("personal.image", { required: true })} placeholder="Paste your image url" />
                        <div onMouseEnter={()=>Sethint("hint")} onMouseLeave={()=>Sethint("hint-hide")}>i</div>
                        <div className={hint}>
                            You can copy and paste your github profile image url here.<br/>
                            By right clicking and copy image address
                        </div>
                    </div>

                    <div className="input-head">Interest/Skills</div>
                    <div className="input-interest">
                        {interestFields.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <input {...register(`personal.interest[${index}].hobbie`, { required: true })} defaultValue={item.hobbie} placeholder="Interest/Hobbies" />
                                    {index !== 0 ? <RiCloseFill onClick={() => { interestRemove(index) }} className="interest-cls-icon" /> : null}
                                </div>
                            )
                        })}
                    </div>
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { interestAppend() }} />
                        <div></div>
                    </div>

                    {technicalFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <input {...register(`personal.technicalskill[${index}].skill`, { required: true })} defaultValue={item.skill} placeholder="Technical Skills" />
                                <input type={"number"} inputMode={"decimal"} min="0" max="10" {...register(`personal.technicalskill[${index}].rate`, { required: true })} defaultValue={item.rate} placeholder="Rate your skill out of 10" />
                                {index !== 0 ?
                                    <div className="input-remove">
                                        <div onClick={() => { technicalRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon" />
                                            <div>Remove</div>
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { technicalAppend() }} />
                        <div></div>
                    </div>


                    <div className="input-head">Work Experience (if any?)</div>
                    {experienceFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input {...register(`experience[${index}].worktitle`)} defaultValue={item.worktitle} placeholder="Title/Position" />
                                <input {...register(`experience[${index}].company`)} defaultValue={item.company} placeholder="Workplace/Company" />
                                <input className="singlefield" {...register(`experience[${index}].description`)} defaultValue={item.description} placeholder="Description" />
                                <div className="year">
                                    <input name="year" inputMode={"numeric"} {...register(`experience[${index}].yearfrom`)} defaultValue={item.yearfrom} placeholder="mm/yy" />
                                    {!present ?
                                        <>
                                            <>-</>
                                            <input name="year" inputMode={"numeric"} {...register(`experience[${index}].yearto`)} defaultValue={item.yearto} placeholder="mm/yy" />
                                        </> : null}
                                    <input type={'checkbox'} {...register(`experience[${index}].present`)} onChange={checkboxFunc} /><span className="input-span">Present?</span>
                                </div>
                                {index !== 0 ?
                                    <div className="input-remove">
                                        <div onClick={() => { experienceRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon" />
                                            <div>Remove</div>
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { experienceAppend() }} />
                        <div></div>
                    </div>

                    <div className="input-head">Personal Projects</div>
                    {projectFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input className="singlefield" {...register(`project[${index}].name`)} defaultValue={item.name} placeholder="Project Title" />
                                <input className="singlefield" {...register(`project[${index}].tech`)} defaultValue={item.tech} placeholder="Tech Used e.g Html, Javascript, Python" />
                                {index !== 0 ?
                                    <div className="input-remove">
                                        <div onClick={() => { projectRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon" />
                                            <div>Remove</div>
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { projectAppend() }} />
                        <div></div>
                    </div>


                    <div className="input-head">{'Courses/Trainings & Certificates'}</div>
                    {courseFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input {...register(`course[${index}].name`)} defaultValue={item.name} placeholder="Course/Certificate Name" />
                                <input {...register(`course[${index}].provider`)} defaultValue={item.provider} placeholder="Course Provider" />
                                {index !== 0 ?
                                    <div className="input-remove">
                                        <div onClick={() => { courseRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon" />
                                            <div>Remove</div>
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { courseAppend() }} />
                        <div></div>
                    </div>


                    <div className="input-head">Education</div>
                    {educationFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input className="singlefield" {...register(`education[${index}].degree`, { required: true })} placeholder="College/Degree/Diploma Name" />
                                <div className="edu-grade">
                                    <div>
                                        <input name="grade" value="percentage" defaultChecked onClick={(e) => Setgrade(e.target.value)} {...register(`education[${index}].gradetype`, { required: true })} type={"radio"} />
                                        <span className="input-span">Percentage?</span>
                                    </div>
                                    <div>/</div>
                                    <div>
                                        <input name="grade" value="grade" onClick={(e) => Setgrade(e.target.value)} {...register(`education[${index}].gradetype`, { required: true })} type={"radio"} />
                                        <span className="input-span">Grade?</span>
                                    </div>
                                </div>
                                <div className="grade-input">
                                    <input type={"number"} inputMode={"decimal"} step={"any"} min="0" max="100" {...register(`education[${index}].grade`, { required: true })} placeholder="Grade/Percentage" />
                                    <>{grade === "percentage" ? " %" : " /10"}</>
                                </div>
                                <input className="singlefield" {...register(`education[${index}].university`, { required: true })} placeholder="Institute/University Name" />
                                <div className="year">
                                    <input name="year" inputMode={"decimal"} {...register(`education[${index}].yearfrom`, { required: true })} placeholder="yyyy e.g 2010" />-
                                    <input name="year" inputMode={"numeric"} {...register(`education[${index}].yearto`, { required: true })} placeholder="yyyy e.g 2014" />
                                </div>
                                {index !== 0 ?
                                    <div className="input-remove">
                                        <div onClick={() => { educationRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon" />
                                            <div>Remove</div>
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon" onClick={() => { educationAppend() }} />
                        <div></div>
                    </div>


                    <div className="input-head">Social/Links</div>
                    <input {...register("link.linkedin", { required: true })} placeholder="Linkedin Url" />
                    <input {...register("link.github", { required: true })} placeholder="Github Url" />
                    <input className="singlefield" {...register("link.portfolio")} placeholder="Porfolio Url" />

                    {errors.personal || errors.education ?
                        <span className="input-err singlefield">Please enter the required field</span> : null}
                   
                    {userredux.personal?<div className="singlefield btndiv mt-3">
                        <input className="input-btn" value={"Clear All"} onClick={clrFunc} />
                        <input className="input-btn" type="submit" value={"Next"} />
                    </div>:
                    <input className="input-btn singlefield mt-3" type="submit" value={"Next"} />}

                </form>
            </div>
        </>
    );
}

export default Input;
