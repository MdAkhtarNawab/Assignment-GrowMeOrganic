import React, { useState } from "react";
import { Box, TextField, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import WarningDialogBox from "./DialogBox/WarningDialogBox";

const StyledInput = styled(TextField)`
  margin-bottom: 15px;
  width: 50vw;
`;

const Page1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const initialState = {
    name: "",
    phoneNumber: "",
    email: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const handleInput = ({ target }) => {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  };
  const { name, phoneNumber, email } = userDetails;
  const handleAuth = () => {

    localStorage.setItem("name", name);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);

    navigate(!name || !phoneNumber || !email ? setOpen(true) : "page2");
  };

  return (
    <Box sx={{marginTop:10}}>
      
      <fieldset>
        <legend>User Details</legend>

        <StyledInput
          onChange={handleInput}
          name="name"
          value={name}
          variant="outlined"
          label="Name"
        />
        <br />
        <StyledInput
          onChange={handleInput}
          name="phoneNumber"
          value={phoneNumber}
          variant="outlined"
          label="Phone No."
        />
        <br />
        <StyledInput
          onChange={handleInput}
          name="email"
          value={email}
          variant="outlined"
          label="Email"
        />
        <br />
        <Button variant="contained" onClick={handleAuth}>
          Submit
        </Button>
        

        
      </fieldset>
      <WarningDialogBox open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Page1;
