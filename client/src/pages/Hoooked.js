import React, { Component } from "react";

class Hoooked extends Component {

    render() {
        return (
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-12 project-top">
                        <h1 ><b>hoook.me</b></h1>
                        <hr align="left" width="50%" className=""></hr>
                        <a href="http://www.hoook.me/" target="_blank" className="btn btn-success">Visit Website</a>
                        <a href="https://github.com/Team-Chocolate-Chip-Cookies/Hoooked" target="_blank" className="btn btn-danger">Github Page</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <div className="project-image text-center">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={require("../images/hoookme.PNG")} alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require("../images/hoookme2.PNG")} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require("../images/hoookme3.PNG")} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <br></br>
                        <h2><b>Project Details</b></h2>
                        <hr align="left" width="50%" className=""></hr>
                        <p>A social media app that allows you to share your favorite TV shows, movies, games, books and music.
                            </p>

                        <p>I worked on a team, and I was primarily responsible for the React front end framework and creating API routes to retrieve data from the database and querying foreign APIs.
                            </p>
                        <p>Secured with Passport.js</p>
                        <h2><b>Technologies Used</b></h2>
                        <hr align="left" width="50%" className=""></hr>
                        <ul>
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MySQL and Sequelize</li>
                            <li>Passport.js</li>
                            <li>CSS with Bootstrap</li>
                            <li>Javascript ES6</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}



export default Hoooked;