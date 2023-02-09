import React, { useState } from "react";
import { Box } from "@mui/material";

import { useEffect } from "react";
import WarningDialogBox from "./DialogBox/WarningDialogBox";
const Warning = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Box>
      <WarningDialogBox open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Warning;
