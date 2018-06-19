import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
    <div>

        <nav className="myNav navbar navbar-light ">
       
           <h1>Eric Trautmiller</h1>
            <Link 
                to="/"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <h2>About</h2>
            </Link>
            <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                <h2>Portfolio</h2>
            </Link>
            <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
               <h2>Contact</h2>
            </Link>
        </nav>
    </div>
);

export default Navbar;
