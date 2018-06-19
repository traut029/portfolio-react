import React, { Component } from "react";
import { Link } from "react-router-dom";
class Portfolio extends Component {

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <br />
                        <div className="big-project-images">
                            <Link  to="/portfolio/hoooked" ><img className="img-fluid" src={require("../images/hoookme.PNG")} /></Link>
                        </div>
                        <div className="big-project-images">
                            <Link to="/portfolio/finance" ><img className="img-fluid" src={require("../images/personal-finance-app.PNG")} /></Link>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <div className="little-project-images">
                        <a href="https://selfie-finder-9000.herokuapp.com/maps.html" target="_blank"><img className="img-fluid" src={require("../images/selfie-finder-2.PNG")} /></a>
                        </div>
                        <div className="little-project-images">
                        <a href="https://fast-caverns-38957.herokuapp.com/" target="_blank"><img className="img-fluid" src={require("../images/burger.PNG")} /></a>
                        </div>
                        <div className="little-project-images">
                        <a href="https://nytreact4.herokuapp.com/" target="_blank"><img className="img-fluid" src={require("../images/react-nyt.PNG")} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Portfolio;