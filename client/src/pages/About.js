import React, { Component } from "react";

class About extends Component {

    render() {
        return (

            <div className="container">
                <div className="row">
                    {/* <div className="col-md-3">

                        <img className="img-fluid w-75" src="./faceshot.jpg" />
                    </div> */}
                    <div className="col-md-8 offset-md-2">
                    <br/>
                    <br/>
                    <br/>
                        <div className="text-center face-card">
                        <div className="">
                        <div className="ProfileImageDiv">
                        <img className="img-fluid w-25 ProfileImage" src={require("../images/faceshot.jpg")} />
                        </div>
                            <h3 className="contentText1">My name is Eric Trautmiller.</h3>
                            <p className="contentText2">I’m a full stack developer. I’m passionate about building powerful and innovative programs that people can rely upon. Check out my projects on the portfolio page.
                        </p>
                        <p className="contentText2">Based in Minneapolis, Minnesota.</p>
                
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default About;