import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { FormContext } from "./Landingpage";
import { Stack, TextField, InputAdornment } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import NearMeIcon from "@mui/icons-material/NearMe";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// const intialData = {name:"",companyname:"",mail:"",location:""};

const Form = () => {
  const { open, setOpen, handleClickOpen } = useContext(FormContext);
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    mail: "",
    location: "",
  });
  const [error,setError] = useState(true);

  console.log(formData);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const data = { ...prev, [name]: value };
      return data;
    });
  };

  const submit = async () => {
    if(formData.name ==="" || formData.companyname ==="" || formData.mail ==="" || formData.location ===""){
      setError(false);
      return false;
    }
    try {
      await axios.post("http://localhost:4000/api/project/form", formData);
      alert("Form Submitted Successfully");
      handleClose();
      setFormData("");
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message === 'E11000 duplicate key error collection');
      alert('This mail id is already registered');
    }
  };

  return (
    <>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Name"
              name="name"
              helperText={!error ? 'please fill the name' : ''}
              value={formData.name}
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
              label="Company Name"
              name="companyname"
              helperText={!error ? 'please fill the companyname' : ''}
              value={formData.companyname}
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
              label="Mail Id"
              name="mail"
              helperText={!error ? 'please fill the mail' : ''}
              value={formData.mail}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Location"
              name="location"
              helperText={!error ? 'please fill the location' : ''}
              value={formData.location}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <NearMeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default Form;
