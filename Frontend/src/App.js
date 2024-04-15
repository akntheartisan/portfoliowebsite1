import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import { useState } from "react";
import Signin from "./components/Signin";
import Admindash from "./components/Admindash";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/*"
            element={
              user ? <Admindash setuser={setUser} /> : <Navigate to="/" />
            }
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
