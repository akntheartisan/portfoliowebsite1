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
import { FormContext } from "../../App";
import { Stack, TextField, InputAdornment, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import NearMeIcon from "@mui/icons-material/NearMe";
import Rating from "@mui/material/Rating";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Form = () => {
  const { open, setOpen } = useContext(FormContext);
  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    mail: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [rating, setRating] = useState(0);

  console.log(formData);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please fill the name";
    if (!formData.companyname) newErrors.companyname = "Please fill the company name";
    if (!formData.mail) newErrors.mail = "Please fill the mail";
    if (!formData.location) newErrors.location = "Please fill the location";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validateForm()) return;

    const dataToSubmit = { ...formData, rating: rating };

    try {
      await axios.post("http://localhost:4000/api/project/form", dataToSubmit);
      alert("Form Submitted Successfully");
      handleClose();
      setFormData({
        name: "",
        companyname: "",
        mail: "",
        location: "",
      });
      setRating(0);
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message === "E11000 duplicate key error collection") {
        alert("This mail id is already registered");
      }
    }
  };

  return (
    <>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
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
              helperText={errors.name}
              error={!!errors.name}
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
              helperText={errors.companyname}
              error={!!errors.companyname}
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
              helperText={errors.mail}
              error={!!errors.mail}
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
              helperText={errors.location}
              error={!!errors.location}
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
            <Box sx={{ marginTop: "20px", textAlign: "center" }}>
              <Typography>Rate My Website</Typography>
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
              />
            </Box>
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
