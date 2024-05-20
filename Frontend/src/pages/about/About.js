import React from "react";
import "./about.css"

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src="" />
            </div>

            <div className="col-md-6 aboutme">
              <h4>About <span style={{color:'rgba(0,239,254,255)'}}>Me</span></h4>
              <h5>MERN Developer</h5>
              <p style={{marginTop:"15px",lineHeight:"25px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="mebutton">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
