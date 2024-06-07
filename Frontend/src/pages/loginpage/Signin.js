import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, InputAdornment, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import axios from "axios";

const Signin = ({ setUser }) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function verify() {

    const credential = {username,password}
    // if (name == "ak" && auth == "ak") {
    //   setUser(true);
    //   navigate("/admin");
    // } else {
    //   alert("wrong credentials");
    // }

    try {
      const response = await axios.post("http://localhost:4000/api/project/signin", credential);
      const token = response.data.token;
      // console.log(token);
      setUserName("");
      setPassword("");

      if(token){
        navigate("/admin")
      }else{
        navigate("/")
      }
      
     
      navigate("/admin");
      alert("Form Submitted Successfully");
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <>
        <Stack direction="column" spacing={4}>
          <TextField
            label="Username"
            name="username"
            // helperText={errors.name}
            // error={!!errors.name}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            name="password"
            // helperText={errors.companyname}
            // error={!!errors.companyname}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction='row' spacing={2} mt={2}>
          <Button autoFocus>
            Cancel
          </Button>
          <Button autoFocus onClick={verify}>
            Submit
          </Button>
        </Stack>
        {/* <div className="signin">
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
        </div> */}
      </>
    </div>
  );
};

export default Signin;
