import React, { Component } from "react";

class Contact extends Component {
   
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p className="contentText2">Reach me at: trautmillereahs@gmail.com</p>
                    <br/>
                    <a href="https://www.linkedin.com/in/eric-trautmiller/" target="_blank"><img className="img-fluid w-25 contact-images" src={require("../images/linkedin.png")} /></a>
                    <a href="https://github.com/traut029" target="_blank"><img className="img-fluid w-25 contact-images" src={require("../images/github.png")} /></a>

                    </div>
                </div>
            </div>
        );
    }
}



export default Contact;