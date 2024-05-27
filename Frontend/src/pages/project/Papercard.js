import { Button } from "@mui/material";
import React from "react";
import "./project.css";
import { useNavigate } from "react-router-dom";

export default function Papercard({ each }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="paper">
        <p>hai</p>
        <Button
          onClick={() =>
            navigate(`/projectexp/${each._id}`, {
              state: {
                desc: each.desc,
                link: each.link,
                image: each.image,
              },
            })
          }
        >
          Click Here
        </Button>
      </div>
    </>
  );
}
