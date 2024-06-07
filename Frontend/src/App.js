import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Landingpage from "./pages/landing/Landingpage";
import { useState, createContext, useEffect } from "react";
import Signin from "./pages/loginpage/Signin";
import Admindash from "./components/Admindash";
import About from "./pages/about/About";
import Skill from "./pages/skills/Skill";
import Project from "./pages/project/Project";
import Projectexp from "./pages/projectexp/Projectexp";
import WebRating from "./pages/rating/WebRating";
import LoginPage from "./pages/loginpage/LoginPage";

export const FormContext = createContext();

function App() {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUser(true);
  //   }
  // }, []);

  const handleClickOpen = () => {
    setOpen(true);
    // console.log('clicked');
  };
  return (
    <div>
      <FormContext.Provider value={{ open, setOpen, handleClickOpen }}>
        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/admin/*"
              element={
                user ? <Admindash setuser={setUser} /> : <Navigate to="/" />
              }
            /> */}
            <Route path="/admin/*" element={<Admindash setuser={setUser} />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route
              path="/rating/:id"
              element={<Landingpage WebRating={WebRating} />}
            />
            <Route path="/projectexp/:id" element={<Projectexp />} />
            <Route path="/signin" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </div>
  );
}

export default App;
