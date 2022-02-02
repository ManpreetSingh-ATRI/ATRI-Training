import React from "react";
import {useParams} from "react-router-dom";
import UpdateTaskForm from "./updateTaskForm";

const Task = (props) => {
    const { taskId, taskTitle } = useParams();
    return (
        <React.Fragment>
            <h3>Update Task: { taskTitle }</h3>
            <UpdateTaskForm taskId={ taskId } onUpdate={ props.onUpdate } />
        </React.Fragment>
    );
}

export default Task;