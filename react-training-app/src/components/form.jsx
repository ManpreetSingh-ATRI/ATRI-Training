import React from "react";
import {useForm} from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: ""
        }
    });

    const firstName = watch("firstName");

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <input {...register("firstName", { required: "This is required" })} placeholder="First Name" className="form-control-lg" />
                <p>{ firstName }</p>
                <p>{errors.firstName?.message}</p>
                <input {...register("lastName", { required: "This is required", minLength: {
                        value: 4,
                        message: "Minimum length is 4"
                    }
                })} placeholder="Last Name" className="form-control-lg" />
                <p>{errors.lastName?.message}</p>
                <input type="submit" className="btn btn-lg btn-outline-success" />
            </form>
        </React.Fragment>
    );
}

export default Form;