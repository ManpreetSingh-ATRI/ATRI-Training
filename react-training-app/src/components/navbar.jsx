import React from "react";

const NavBar = ({ totalCounters }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:3000/">
                        Task Manager
                        <span className="badge badge-pill bg-secondary m-2">
                            {totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;