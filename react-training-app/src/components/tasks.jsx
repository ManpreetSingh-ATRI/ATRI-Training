import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Task from "./task";
import Table from "./table";

const Tasks = (props) => {
    const routeMatch = useRouteMatch();

    const data = React.useMemo(
        () => {
            return props.tasks.map(data => {
                return data;
            });
        },
        [props]
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Task Name',
                accessor: 'title',
                Cell: ({ row }) => (
                    <Link to={`${routeMatch.url}/${ row.original.id }/${ row.original.title }`}>
                        { row.original.title }
                    </Link>
                )
            },
            {
                Header: 'Priority',
                accessor: 'priority',
            },
            {
                Header: () => null,
                id: 'delete',
                Cell: ({ row }) => (
                    <button
                        onClick={() => props.onDelete(row.original.id)}
                        className="btn btn-outline-danger">
                        Delete
                    </button>
                ),
            }],
        [props, routeMatch]
    );

    return(
        <React.Fragment>
            <h2>All Tasks</h2>
            <Table columns={ columns } data={ data } />
            <br/>
            <Switch>
                <Route path={`${ routeMatch.path }/:taskId/:taskTitle`}>
                    <Task onUpdate={ props.onUpdate } />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default Tasks;