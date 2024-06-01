import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Landingpage from "./pages/landing/Landingpage";
import { useState, createContext } from "react";
import Signin from "./components/Signin";
import Admindash from "./components/Admindash";
import About from "./pages/about/About";
import Skill from "./pages/skills/Skill";
import Project from "./pages/project/Project";
import Projectexp from "./pages/projectexp/Projectexp";
import WebRating from "./pages/rating/WebRating";

export const FormContext = createContext();

function App() {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // console.log('clicked');
  };
  return (
    <div>
      <FormContext.Provider value={{ open, setOpen, handleClickOpen }}>
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
            <Route path="/:id" element={<Landingpage  WebRating={WebRating}/>} />
            <Route path="/projectexp/:id" element={<Projectexp />} />
            <Route path="/signin" element={<Signin setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </div>
  );
}

export default App;
