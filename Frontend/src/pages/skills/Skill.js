import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <>
      <div className="skill" id="skill">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <h3 style={{textAlign:"center",color:"white",marginTop:"20px",marginBottom:"50px"}}>My <span style={{color:'rgba(0,239,254,255)'}}>Skills</span></h3>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h4 style={{textAlign:"center"}}>Web Development</h4>
                <p style={{textAlign:"center"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h4 style={{textAlign:"center"}}>Web Development</h4>
                <p style={{textAlign:"center"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card">
                <h4 style={{textAlign:"center"}}>Web Development</h4>
                <p style={{textAlign:"center"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
