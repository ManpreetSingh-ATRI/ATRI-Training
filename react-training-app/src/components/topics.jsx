import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Topic from "./topic";

const Topics = () => {
    let {path, url} = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Prop v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
};

export default Topics;