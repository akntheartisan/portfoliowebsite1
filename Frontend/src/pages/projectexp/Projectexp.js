import React from "react";
import { useLocation } from "react-router-dom";
import "./projectexp.css";
import ProjectPaper from "./ProjectPaper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
import { IconButton } from "@mui/material";

const Projectexp = () => {
  const location = useLocation();
  const state = location.state || {};
  const { image } = state;

  return (
    <>
      <div className="projectexp">
        <div style={{ position: "relative" }}>
          <img
            src={`http://localhost:4000/uploads/${image}`}
            alt="project"
            style={{ backdropFilter: blur("1rem") }}
          />
          <IconButton
            component="a"
            href="http://localhost:3000/"
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "rgba(0, 239, 254, 255)",
              filter: "drop-shadow -2px -1px 15px -1px rgba(0, 239, 254, 255)",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <ProjectPaper state={state} />
      </div>
    </>
  );
};

export default Projectexp;
