import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs"
import {RiCloseFill} from "react-icons/ri"
import "./Input.css";
import { useForm, useFieldArray } from "react-hook-form";

function Input() {
    const { register, handleSubmit, control, formState: { errors } } = useForm(
        {
            defaultValues: { 
                test: [{ firstname: "" }],
                interest:[""]   //https://codesandbox.io/s/react-hook-form-multiple-usefieldarray-in-a-form-ffboe?file=/src/index.js:525-651
             }
        }
    );
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "test"
        }
    )
    const {
        fields: interestFields,
        append: interestAppend,
        remove: interestRemove
    } = useFieldArray({ control, name: "interest" });

    const onSubmit = data => console.log(data);

    useEffect(() => {
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

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
                    {interestFields.map((item,index)=>{
                        return(
                            <input key={item.id} className="singlefield" {...register(`interest[${index}]`)} defaultValue={""} placeholder="Interest/Hobbies" />
                        )
                    })}
                    <div onClick={()=>{interestAppend()}}>abc</div>
                    <input {...register("personal.skills")} placeholder="Technical Skills" />
                    <input type={"number"} {...register("skillrating", { valueAsNumber: true })} placeholder="Rate your skill out of 10" />

                    <div className="input-head">Work Experience</div>
                    <input {...register("experience.worktitle")} placeholder="Title/Position" />
                    <input {...register("experience.company")} placeholder="Workplace/Company" />
                    <input className="singlefield" {...register("experience.description")} placeholder="Description" />
                    <div className="year">
                        <input name="year" {...register("experience.yearfrom")} placeholder="mm/yy" />-
                        <input name="year" {...register("experience.yearto")} placeholder="mm/yy" />
                        <input type={'checkbox'} /><span className="input-span">Present?</span>
                    </div>

                    <div className="input-head">{'Courses/Trainings & Certificates'}</div>
                    <input {...register("course.name")} placeholder="Course/Certificate Name" />
                    <input {...register("course.provider")} placeholder="Course Provider" />

                    <div className="input-head">Education</div>
                    <input {...register("education.degree")} placeholder="College/Degree/Diploma Name" />
                    <input {...register("education.grade")} placeholder="Grade/Percentage" />
                    <input className="singlefield" {...register("education.university")} placeholder="Institute/University Name" />
                    <div className="year">
                        <input name="year" {...register("education.yearfrom")} placeholder="mm/yy" />-
                        <input name="year" {...register("education.yearto")} placeholder="mm/yy" />
                    </div>

                    <div className="input-head">Social/Links</div>
                    <input {...register("link.linkedin")} placeholder="Linkedin Url" />
                    <input {...register("link.github")} placeholder="Github Url" />
                    <input className="singlefield" {...register("link.portfolio")} placeholder="Porfolio Url" />

                    {fields.map((item, index) => {
                        return (
                            <>
                            <input key={item.id} className="singlefield" {...register(`test[${index}].firstname`)}
                                defaultValue={item.firstname} placeholder="test" />
                             {index!==0?
                             <div className="input-remove">
                                <div onClick={()=>{remove(index)}}>
                                    <RiCloseFill className="input-remove-icon"/>
                                    <div>Remove</div>
                                </div>
                             </div>:null}
                            </>
                        )
                    })}
                    
                    <div className="add-input-block">
                        <BsFillPlusCircleFill className="add-input-icon"  onClick={() => {append()}}/>
                        <div></div>
                    </div>

                    {errors.personal?.lastname && <span className="input-err">This field is required</span>}
                    <input type="submit" value={"Next"} />
                </form>
            </div>
        </>
    );
}

export default Input;
