import React, {Component} from "react";
// import logo from './logo.svg';
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Topics from "./components/topics";
import Table from "./components/table";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    constructor(props) {
        super(props);
        console.log("App Constructor");
    }

    componentDidMount() {
        console.log("App Mounted");
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters })
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        });
        this.setState({ counters });
    }

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters })
    }

    render() {
        console.log("App rendered");
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Counters</Link>
                                </li>
                                <li>
                                    <Link to="/topics">Topics</Link>
                                </li>
                                <li>
                                    <Link to="/table">Table</Link>
                                </li>
                            </ul>

                            <Switch>
                                <Route path="/topics">
                                    <Topics />
                                </Route>
                                <Route path="/table">
                                    <Table />
                                </Route>
                                <Route path="/">
                                    <Counters
                                        counters={this.state.counters}
                                        onReset={this.handleReset}
                                        onIncrement={this.handleIncrement}
                                        onDelete={this.handleDelete}/>
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

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
