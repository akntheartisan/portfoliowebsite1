import { Button } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Projectexp = () => {
  const location = useLocation();
  const state = location.state || {};  // Provide a default empty object
  const { desc, link } = state;

  // Debugging
  console.log("Received state:", state);

  return (
    <>
      <p>{desc}</p>
      <Link to={link}><Button>Click Here</Button></Link>
     
    </>
  );
};

export default Projectexp;
