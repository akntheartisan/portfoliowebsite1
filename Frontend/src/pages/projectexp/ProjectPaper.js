import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./projectexp.css";

export default function ProjectPaper({ state }) {
  const { desc, link, title } = state;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 500,
          height: 500,
          // borderRadius: '0 8px 8px 0',
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#323846",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="projectdetails">
          <h4
            style={{
              marginBottom: "30px",
              fontStyle: "italic",
              color: 'rgb(0, 239, 254)'
            }}
          >
            {title}
          </h4>
          <p>{desc}</p>
          <Link to={link}>
            <Button className="buton">Take Me There</Button>
          </Link>
        </div>
      </Paper>
    </Box>
  );
}
