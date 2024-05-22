import React, { useState,useContext } from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FormContext } from "../../App";
import Form from "../landing/Form";

const Mine = () => {

  const {open,setOpen,handleClickOpen} = useContext(FormContext);
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="me">
        <div className="medef">
          <h2 style={{ letterSpacing: "3px" }}>Hi, I'm ARVIND NAGARAJ</h2>
          <h3 style={{ marginBottom: "10px", letterSpacing: "3px",marginTop:"5px",color:"rgba(0,239,254,255)" }}>
            WEB DEVELOPER
          </h3>
          <div className="border"></div>
          <h4 style={{ letterSpacing: "4px" }}>
            I love coding, so i spend my time
            <br />
            learing, working and teaching code.
          </h4>
            
          <div className="social">
            <XIcon sx={{ color: 'rgba(0,239,254,255)' }}/>
            <LinkedInIcon sx={{ color: 'rgba(0,239,254,255)' }}/>
            <InstagramIcon sx={{ color: 'rgba(0,239,254,255)' }}/>
          </div>

          <button className="mebutton" onClick={handleClickOpen}>Get In Touch</button>
        </div>
        {/* <div className="meimgcont">
          <img className="meimg" src="/me.jpg" alt="me" />
        </div> */}
      </div>
      <Form/>
    </div>
  );
};

export default Mine;
