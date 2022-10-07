import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import "./Input.css";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getuserdata } from "./Redux/Reducers/userReducer";

function Input() {
    const dispatch = useDispatch()
    const { register, handleSubmit, control, formState: { errors } } = useForm(
        {
            defaultValues: {
                experience: [{
                    company: "", description: "", worktitle: "", yearfrom: "", yearto: ""
                }],
                course: [{
                    name: "", provider: ""
                }],
                education: [{
                    degree: "", grade: "", university: "", yearfrom: "", yearto: ""
                }],
                personal: {
                    technicalskill: [{
                        skill: "", rate: ""
                    }],
                    interest: [{
                        hobbie: ""
                    }]
                },
                project:[{
                    name:"",tech:""
                }]

            }
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
    }

    return (
        <>
            <div className="input-header">Enter your details</div>
            <div className="input-main">
                <form className="input-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-head">Personal Details</div>
                    <input  {...register("personal.name",{required:true})} placeholder="Name" />
                    <input {...register("personal.lastname", { required: true })} placeholder="Last Name" />
                    <input  {...register("personal.date", { required: true })} placeholder="Birthdate (dd-mm-yy)" />
                    <input {...register("personal.mob", { maxLength: 10,required:true })} placeholder="Mobile No- +91" />
                    <input className="singlefield" type={"personal.email"} {...register("email", { required: true })} placeholder="Email" />
                    <input {...register("personal.title", { required: true })} placeholder="Professional Title e.g Full Stack Developer" />
                    <input {...register("personal.quote", { required: true })} placeholder="Describe yourself in one or two line" />

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
                                <input type={"number"} {...register(`personal.technicalskill[${index}].rate`, { required: true }, { valueAsNumber: true })} defaultValue={item.rate} placeholder="Rate your skill out of 10" />
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
                                    <input name="year" {...register(`experience[${index}].yearfrom`)} defaultValue={item.yearfrom} placeholder="mm/yy" />-
                                    <input name="year" {...register(`experience[${index}].yearto`)} defaultValue={item.yearto} placeholder="mm/yy" />
                                    <input type={'checkbox'} /><span className="input-span">Present?</span>
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
                    {projectFields.map((item,index)=>{
                        return(
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
                                <input {...register(`education[${index}].degree`, { required: true })} placeholder="College/Degree/Diploma Name" />
                                <input {...register(`education[${index}].grade`, { required: true })} placeholder="Grade/Percentage" />
                                <input className="singlefield" {...register(`education[${index}].university`, { required: true })} placeholder="Institute/University Name" />
                                <div className="year">
                                    <input name="year" {...register(`education[${index}].yearfrom`, { required: true })} placeholder="mm/yy" />-
                                    <input name="year" {...register(`education[${index}].yearto`, { required: true })} placeholder="mm/yy" />
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

                    {errors.personal||errors.education?
                    <span className="input-err">Please enter the required field</span>:null}
                    <input type="submit" value={"Next"} />
                </form>
            </div>
        </>
    );
}

export default Input;
