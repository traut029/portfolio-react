import React from "react";
import { Link } from "react-router-dom";

const Hamburger = (props) => (
    <div>
        <i className="fa fa-bars fa-5x bar-image" 
         onClick={() => props.clickBurger()}
        >
        </i>

        <div className="overlay hidden"
            className={props.hamburger === "open" ? "overlay revealed" : "overlay hidden"}>
            <div className="text-center hamburger-links">
                <Link
                    to="/"
                    className={window.location.hash === "#/" ? "nav-link active" : "nav-link"}
                    onClick={() => props.clickBurger()}
                    >
                    <h2>About</h2>
                </Link>
                <Link
                    to="/portfolio"
                    className={window.location.hash === "#/portfolio" ? "nav-link active" : "nav-link"}
                    onClick={() => props.clickBurger()}
                    >
                    <h2>Portfolio</h2>
                </Link>
                <Link
                    to="/contact"
                    className={window.location.hash === "#/contact" ? "nav-link active" : "nav-link"}
                    onClick={() => props.clickBurger()}
                    >
                    <h2>Contact</h2>
                </Link>
            </div>
        </div>
    </div>
);

export default Hamburger;