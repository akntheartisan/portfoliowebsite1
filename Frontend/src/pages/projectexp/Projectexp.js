import { Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./projectexp.css";
import ProjectPaper from "./ProjectPaper";

const Projectexp = () => {
  const location = useLocation();
  const state = location.state || {}; 
  const { desc, link, image } = state;

  return (
    <>
      <div className="projectexp">
        <img src={`http://localhost:4000/uploads/${image}`} />
        <ProjectPaper />
        <div className="projectdetails">
          <p>{desc}</p>
          <Link to={link}>
            <Button>Click Here</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projectexp;
