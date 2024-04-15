import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Signin = ({ setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [auth, setAuth] = useState("");

  function verify() {
    if (name == "ak" && auth == "ak") {
      setUser(true);
      navigate("/admin");
    } else {
      alert("wrong credentials");
    }
  }
  return (
    <div>
      <>
        <div className="signin">
          <h3>Sign In</h3>
          <form>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />

            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                value={auth}
                onChange={(e) => setAuth(e.target.value)}
              />
            </div>

            <div>
              <button onClick={verify}>Submit</button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Signin;
