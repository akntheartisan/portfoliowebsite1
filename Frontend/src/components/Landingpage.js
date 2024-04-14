import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Mine from "./Mine";


const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Mine/>
      <div className="glass"></div>
      <div className="landing">
        <img className="landimg" src="/background.jpg" alt="Background" />
      </div>
    </>
  );
};

export default Landingpage;
