import React from "react";
import "./Input.css";
import { useForm } from "react-hook-form";

function Input() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="input-main">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name")} placeholder="Name"/>
                    <input {...register("lastname", { required: true })} placeholder="Last Name"/>
                    {errors.lastname && <span className="input-err">This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}

export default Input;
