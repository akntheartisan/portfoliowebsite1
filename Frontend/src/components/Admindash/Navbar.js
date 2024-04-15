import React from "react";
import { Link } from "react-router-dom";
import "../../Admin.css";

const Navbar = () => {
  return (
    <>
      <nav className="sidenav">
        <h2 style={{ color: "white", marginBottom: "30px" }}>Dashboard</h2>
        <div class="list">
          <div class="listitem">
            <Link to="/admin/proadd">Project</Link>
          </div>
          <div class="listitem">
            <Link to="/admin/form">Home</Link>
          </div>
          <div class="listitem">
            <Link to="/admin/gallery">Home</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
