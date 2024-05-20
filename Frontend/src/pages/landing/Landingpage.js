import React, {useState, createContext} from "react";
import "../../App.css";
import Navbar from '../navbar/Navbar';
import Mine from '../mine/Mine';

export const FormContext = createContext();

const Landingpage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // console.log('clicked');
  };
  return (
    <>
    <FormContext.Provider
    value={{open,setOpen,handleClickOpen}} 
    >
      <Navbar/>
      <Mine/>
    </FormContext.Provider>
  
      <div className="landing">
        {/* <img className="landimg" src="/background.jpg" alt="Background" /> */}
      </div>
    </>
  );
};

export default Landingpage;
