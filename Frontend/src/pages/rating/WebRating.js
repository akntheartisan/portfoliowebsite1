import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WebRating = ({ id }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const ratingSubmit = async () => {
    const data = { id, rating: rating };

    try {
      await axios.post("http://localhost:4000/api/project/ratingsub", data);
      alert("Rating Submitted Successfully");
      setRating(0);
      navigate("/");
    } catch (error) {
    
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
        setRating(0);
        navigate("/");
      } else {
        console.log(error);
      }
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 150,
          },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Rate My Website</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
          <Button onClick={ratingSubmit}>Submit</Button>
        </Paper>
      </Box>
    </>
  );
};

export default WebRating;
