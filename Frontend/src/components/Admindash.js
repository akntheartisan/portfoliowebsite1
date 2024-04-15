import React from "react";
import Header from "./Admindash/Header";
import Footer from "./Admindash/Footer";
import Navbar from "./Admindash/Navbar";
import Workarea from "./Admindash/Workarea";
import "../Admin.css";

const Admindash = ({ setuser }) => {
  return (
    <>
      <div className="admindash">
        <Header setuser={setuser} />
        <Navbar />
        <Workarea />
        <Footer />
      </div>
    </>
  );
};

export default Admindash;
