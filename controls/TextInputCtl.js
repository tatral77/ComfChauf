import React, { Component } from "react";
import { TextField, Box } from "@mui/material";
export default function TextInputCtl(props) {
  return (
    <Box>
      <TextField
        label={props.label}
        sx={{ backgroundColor: "white", borderRadius: 1.5 }}
        variant="standard"
        size="small"
      ></TextField>
    </Box>
  );
}
