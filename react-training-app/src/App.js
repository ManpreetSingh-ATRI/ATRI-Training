import React, {Component} from "react";
import Navbar from "./components/navbar";
import './App.css';
import {Link, Route, HashRouter as Router, Switch} from "react-router-dom";
import Tasks from "./components/tasks";
import AddTaskForm from "./components/addTaskForm";
import axios from "axios";

class App extends Component {
    state = {
        tasks: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/tasks`)
            .then((response) => {
                const tasks = response.data;
                this.setState({ tasks });
            });
    }

    handleAdd = (task) => {
        const { title, priority } = task;
        axios.post(`http://localhost:8080/tasks`, { title, priority })
            .then(() => {
                const tasks = [...this.state.tasks];
                tasks.push(task);
                this.setState({ tasks });
            });
    }

    handleUpdate = (task, taskId) => {
        // The following is not the right way to do it but just a make shift operation.
        axios.delete(`http://localhost:8080/tasks/${ taskId }`)
            .then(() => {
                const tasks = this.state.tasks.filter(t => this.state.tasks.indexOf(t) !== taskId);
                this.setState({ tasks });
                const { title, priority } = task;
                axios.post(`http://localhost:8080/tasks`, { title, priority })
                    .then(() => {
                        const tasks = [...this.state.tasks];
                        tasks.push(task);
                        this.setState({ tasks });
                    });
            });
    }

    handleDelete = (taskId) => {
        axios.delete(`http://localhost:8080/tasks/${ taskId }`)
            .then(() => {
                const tasks = this.state.tasks.filter(t => this.state.tasks.indexOf(t) !== taskId);
                this.setState({ tasks });
            });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={this.state.tasks.length}
                />
                <main className="container">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">All Tasks</Link>
                                </li>
                                <li>
                                    <Link to="/add-new-task">Add New Task</Link>
                                </li>
                            </ul>

                            <Switch>
                                <Route path="/add-new-task">
                                    <AddTaskForm
                                        onAdd={this.handleAdd} />
                                </Route>
                                <Route path="/">
                                    <Tasks
                                        tasks={ this.state.tasks }
                                        onDelete={ this.handleDelete }
                                        onUpdate={ this.handleUpdate } />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
