import React from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Mine = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="me">
        <div className="medef">
          <h2 style={{ letterSpacing: "3px" }}>Hi, I'm ARVIND NAGARAJ</h2>
          <h3 style={{ marginBottom: "10px", letterSpacing: "3px",marginTop:"5px" }}>
            WEB DEVELOPER
          </h3>
          <div className="border"></div>
          <h4 style={{ letterSpacing: "4px" }}>
            I love coding, so i spend my time
            <br />
            learing, working and teaching code.
          </h4>
          <button className="mebutton">Get In Touch</button>  
          <div className="social">
            <XIcon/>
            <LinkedInIcon/>
            <InstagramIcon/>
          </div>
        </div>
        <div className="meimgcont">
          <img className="meimg" src="/me.jpg" alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Mine;
