import React from "react";

// Stateless functional component
const NavBar = ({ totalCounters }) => {
    console.log("Navbar - rendered");
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:8000/">
                        Navbar
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