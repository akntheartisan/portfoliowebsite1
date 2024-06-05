import { Button, Typography } from "@mui/material";
import React from "react";
import "./project.css";
import { useNavigate } from "react-router-dom";

export default function Papercard({ each }) {
  console.log(each);
  const navigate = useNavigate();
  return (
    <>
      <div className="paper">
        <p style={{textAlign:'center',color:'rgb(0, 239, 254)',fontSize:'20px'}}>{each.title}</p>
        <div style={{display:"flex",justifyContent:'center'}}>
        <Button
          onClick={() =>
            navigate(`/projectexp/${each._id}`, {
              state: {
                desc: each.desc,
                link: each.link,
                image: each.image,
                title: each.title
              },
            })
          }
        >
          <Typography sx={{color:'white'}}>Click Here</Typography>
        </Button>
        </div>
     
      </div>
    </>
  );
}
