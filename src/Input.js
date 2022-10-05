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
                }

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
                    <input  {...register("personal.name")} placeholder="Name" />
                    <input {...register("personal.lastname", { required: true })} placeholder="Last Name" />
                    <input  {...register("personal.date")} placeholder="Birthdate (dd-mm-yy)" />
                    <input {...register("personal.mob", { maxLength: 10 })} placeholder="Mobile No- +91" />
                    <input className="singlefield" type={"personal.email"} {...register("email")} placeholder="Email" />
                    <input {...register("personal.title")} placeholder="Professional Title e.g Full Stack Developer" />
                    <input {...register("personal.quote")} placeholder="Describe yourself in one or two line" />

                    <div className="input-head">Interest/Skills</div>
                    <div className="input-interest">
                        {interestFields.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <input {...register(`personal.interest[${index}].hobbie`)} defaultValue={item.hobbie} placeholder="Interest/Hobbies" />
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
                                <input {...register(`personal.technicalskill[${index}].skill`)} defaultValue={item.skill} placeholder="Technical Skills" />
                                <input type={"number"} {...register(`personal.technicalskill[${index}].rate`, { valueAsNumber: true })} defaultValue={item.rate} placeholder="Rate your skill out of 10" />
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


                    <div className="input-head">Work Experience</div>
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
                                <input {...register(`education[${index}].degree`)} placeholder="College/Degree/Diploma Name" />
                                <input {...register(`education[${index}].grade`)} placeholder="Grade/Percentage" />
                                <input className="singlefield" {...register(`education[${index}].university`)} placeholder="Institute/University Name" />
                                <div className="year">
                                    <input name="year" {...register(`education[${index}].yearfrom`)} placeholder="mm/yy" />-
                                    <input name="year" {...register(`education[${index}].yearto`)} placeholder="mm/yy" />
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
                    <input {...register("link.linkedin")} placeholder="Linkedin Url" />
                    <input {...register("link.github")} placeholder="Github Url" />
                    <input className="singlefield" {...register("link.portfolio")} placeholder="Porfolio Url" />

                    {errors.personal?.lastname && <span className="input-err">This field is required</span>}
                    <input type="submit" value={"Next"} />
                </form>
            </div>
        </>
    );
}

export default Input;
