import React, { useEffect } from "react";
import "./Input.css";
import { useForm } from "react-hook-form";

function Input() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(()=>{
        window.scrollTo({
            top:0,left:0,behavior:"smooth"
        })
    },[])

    return (
        <>
            <div className="input-main">
                <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div>Personal Details</div>
                    <input  {...register("name")} placeholder="Name"/>
                    <input {...register("lastname", { required: true })} placeholder="Last Name"/>
                    <input  {...register("date")} placeholder="Birthdate (dd-mm-yy)"/>
                    <input {...register("mob",{maxLength:10})} placeholder="Mobile No- +91"/>
                    <input type={"email"} {...register("email")} placeholder="Email"/>
                    <input {...register("title")} placeholder="Professional Title"/>
                    <input {...register("quote")} placeholder="Describe yourself in one or two line"/>
                    
                    <div>Interest/Skills</div>
                    <input className="singlefield" {...register("interest")} placeholder="Interest/Hobbies"/>
                    <input {...register("skills")} placeholder="Technical Skills"/>
                    <input type={"number"} {...register("skillrating",{valueAsNumber: true})} placeholder="Rate your skill out of 10"/>
                    
                    <div>Work Experience</div>
                    <input {...register("experience.worktitle")} placeholder="Title/Position"/>
                    <input {...register("experience.company")} placeholder="Workplace/Company"/>
                    <input className="singlefield" {...register("experience.description")} placeholder="Description"/>
                    <div className="year">
                        <input name="year" {...register("experience.yearfrom")} placeholder="mm/yy"/>-
                        <input name="year" {...register("experience.yearto")} placeholder="mm/yy"/>
                        <input type={'checkbox'}/><span>Present?</span>
                    </div>
                    
                    <div>{'Courses/Trainings & Certificates'}</div>
                    <input {...register("course.name")} placeholder="Course/Certificate Name"/>
                    <input {...register("course.provider")} placeholder="Course Provider"/>
                    
                    <div>Education</div>
                    <input {...register("education.degree")} placeholder="College/Degree/Diploma Name"/>
                    <input {...register("education.grade")} placeholder="Grade/Percentage"/>
                    <input className="singlefield" {...register("education.university")} placeholder="Institute/University Name"/>
                    <div className="year">
                        <input name="year" {...register("education.yearfrom")} placeholder="mm/yy"/>-
                        <input name="year" {...register("education.yearto")} placeholder="mm/yy"/>
                    </div>

                    <div>Social/Links</div>
                    <input {...register("link.linkedin")} placeholder="Linkedin Url"/>
                    <input {...register("education.github")} placeholder="Github Url"/>
                    <input className="singlefield" {...register("education.portfolio")} placeholder="Porfolio Url"/>
                    
                    {errors.lastname && <span className="input-err">This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}

export default Input;
