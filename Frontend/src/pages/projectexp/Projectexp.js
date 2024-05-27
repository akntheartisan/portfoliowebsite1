import React from "react";
import { useLocation } from "react-router-dom";
import "./projectexp.css";
import ProjectPaper from "./ProjectPaper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Projectexp = () => {
  const location = useLocation();
  const state = location.state || {};
  const { image } = state;

  return (
    <>
      <div className="projectexp">
        <img src={`http://localhost:4000/uploads/${image}`} alt="project"/>
        {/* <ArrowBackIcon sx={{position:'absolute'}}/> */}
        <ProjectPaper state={state} />
      </div>
    </>
  );
};

export default Projectexp;
