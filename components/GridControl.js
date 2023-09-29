import React from "react";
import { Typography, Box, Grid } from "@mui/material";

export default function GridControl() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100px", borderStyle: "solid", borderColor: "red" }}
    >
      <Grid item sx={{ backgroundColor: "green" }}>
        Hello
      </Grid>
      <Grid item sx={{ backgroundColor: "red" }}>
        How
      </Grid>
      <Grid item sx={{ backgroundColor: "yellow" }}>
        Are
      </Grid>
      <Grid item sx={{ backgroundColor: "blue" }}>
        You
      </Grid>
    </Grid>
  );
}
