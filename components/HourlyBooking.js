import React, { Component } from "react";
import { TextField, Grid } from "@mui/material";
import TextInputCtl from "../controls/TextInputCtl";
export default function HourlyBooking() {
  return (
    <Grid
      container
      sx={{ pt: "30px" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={4}>
        <TextInputCtl label="Pickup Location" />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <TextInputCtl label="Dropoff Location" />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <TextInputCtl label="Hours" />
      </Grid>
    </Grid>
  );
}
