import React from "react";
import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
import Gallery from "./Gallery";
import Projectform from "./Projectform";

const Workarea = () => {
  return (
    <div className="workspace">
      <Routes>
        <Route path="/proadd" element={<Projectform />} />
        <Route path="/form" element={<Form />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Workarea;
