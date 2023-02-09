import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WarningDialogBox = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Please Enter Complete Credentials ! </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have to Fill all the following input fields in order to go to
            Users List page otherwise, You will be redirect to Home page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WarningDialogBox;
