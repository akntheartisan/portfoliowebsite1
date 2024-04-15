import React from 'react'
import "../../Admin.css";
import { useNavigate } from 'react-router-dom';


const Header = ({setuser}) => {

  const navigate = useNavigate();

  function logout(){
    setuser(false);
    navigate("/");

  }
  return (
 <>
 <header className='adminheader'>
    <div className='adminlogo'>
        <h3>logo</h3>
    </div>
    <div>
        <button onClick={logout}>logout</button>
    </div>
 </header>
 </>
  )
}

export default Header