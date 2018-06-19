import React, { Component } from "react";

class Finance extends Component {

    render() {
        return (
            <div className="container w-75">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 ><b>Personal Finance App</b></h1>
                        <hr align="left" width="50%" className=""></hr>
                        <a href="https://personal-financial-app.herokuapp.com/investments" target="_blank" className="btn btn-success">Visit Website</a>
                        <a href="https://github.com/mguldberg/personal-financial-app" target="_blank" className="btn btn-danger">Github Page</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <br />
                        <div className="project-image text-center">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={require("../images/personal-finance-app.PNG")}
                                         alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require("../images/personal-finance-app2.PNG")} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require("../images/personal-finance-app3.PNG")} alt="Third slide" />
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
                        <p>Displays personal expenses in an interactable pi-chart. Gathers data on current stock and cryptocurrency values and displays user’s investments in pi-chart.
                            </p>
                            
                        <h2><b>Technologies Used</b></h2>
                        <hr align="left" width="50%" className=""></hr>
                        <ul>
                            
                            <li>Express</li>
                            <li>Node</li>
                            <li>MySQL and Sequelize</li>
                            <li>Jquery</li>
                            <li>CSS with Bootstrap</li>
                            <li>Handlebars.js</li>
                            <li>HighCharts</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}



export default Finance;