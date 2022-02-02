import React from "react";
import {useForm} from "react-hook-form";

const UpdateTaskForm = (props) => {
    const {
        register,
        handleSubmit
    } = useForm(props);

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit((data) => {
                props.onUpdate(data, props.taskId);
            })}>
                <input {...register("title", { required: "This is required" })} placeholder="Title" className="form-control m-2" />
                <select {...register("priority", {required: "This is required"})} placeholder="Priority" className="form-select m-2">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="submit" className="btn btn-outline-success m-2" />
            </form>
        </React.Fragment>
    );
}

export default UpdateTaskForm;