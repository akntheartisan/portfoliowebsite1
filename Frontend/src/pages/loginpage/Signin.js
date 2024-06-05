import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, InputAdornment, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";

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
        <Stack direction="column" spacing={4}>
          <TextField
            label="Username"
            name="name"
            // helperText={errors.name}
            // error={!!errors.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            name="companyname"
            // helperText={errors.companyname}
            // error={!!errors.companyname}
            value={auth}
            onChange={(e) => setAuth(e.target.value)}
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
          <Button autoFocus onClick={verify}>
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
