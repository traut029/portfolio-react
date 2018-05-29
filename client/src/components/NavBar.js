import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
    <div>

        <nav className="myNav navbar navbar-light ">
       
            <span><h1>Eric Trautmiller</h1></span>
            <Link 
                to="/"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <h2 className="text-dark">About</h2>
            </Link>
            <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                <h2 className="text-dark">Portfolio</h2>
            </Link>
            <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
               <h2 className="text-dark">Contact</h2>
            </Link>
        </nav>
    </div>
);

export default Navbar;
