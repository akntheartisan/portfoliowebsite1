import React, {useState, createContext} from "react";
import "../../App.css";
import Navbar from '../navbar/Navbar';
import Mine from '../mine/Mine';
import About from "../about/About";
import Skill from "../skills/Skill";
import Project from "../project/Project";
import Projectexp from "../projectexp/Projectexp";



const Landingpage = () => {

  return (
    <>
    
      <Navbar/>
      <Mine/>
      <div className="landing">
        {/* <img className="landimg" src="/background.jpg" alt="Background" /> */}
      </div>
      <About/>
      <Skill/>
      <Project/>
    </>
  );
};

export default Landingpage;
