import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, InputAdornment, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-hot-toast";

const intial = { name: "", username: "", password: "", confirmpassword: "" };

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(intial);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(user);

  const submit = async () => {
    try {
      const { response } = await axios.post(
        "http://localhost:4000/api/project/signup",
        user
      );

      toast.success("Login Successfull");
      setUser({ name: "", username: "", password: "", confirmpassword: "" });
    } catch (error) {
      console.log(error);
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <Stack direction="column" spacing={4}>
        <TextField
          label="name"
          name="name"
          // helperText={errors.name}
          // error={!!errors.name}
          value={user.name}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="username"
          name="username"
          // helperText={errors.companyname}
          // error={!!errors.companyname}
          value={user.username}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Password"
          name="password"
          // helperText={errors.companyname}
          // error={!!errors.companyname}
          value={user.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="confirmpassword"
          name="confirmpassword"
          // helperText={errors.companyname}
          // error={!!errors.companyname}
          value={user.confirmpassword}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        <Button autoFocus>Cancel</Button>
        <Button autoFocus onClick={submit}>
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default Signup;
