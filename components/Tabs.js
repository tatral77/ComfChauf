import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Container, width, Box } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.2) 100%), url("https://www.ichauffeur.co.uk/wp-content/uploads/20…S-Class-Mercedes-with-passenger-and-chauffeur.jpg")`,
    opacity: "inherit",
    height: "850px",
    position: "relative",
    overflow: "hidden",
    color: "white",
    marginTop: "100px",
  },
  containercar: {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.2) 100%), url("	https://www.ichauffeur.co.uk/wp-content/uploads/2021/03/passenger-in-S-Class-Mercedes-2022.jpg")`,
    opacity: "inherit",
    width: "100%",
    height: "850px",
    position: "relative",
    overflow: "hidden",
    color: "white",
  },
  containerCarSection: {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.2) 100%), url("https://www.ichauffeur.co.uk/wp-content/uploads/2021/03/homepage-tall-block.jpg")`,
    opacity: "inherit",
    width: "100%",
    height: "850px",
    position: "relative",
    overflow: "hidden",
    color: "white",
  },
  Tabs: {
    textTransform: "none",
    marginTop: "30px",
    color: "white",
  },
  firstSectionHead: {
    fontSize: "30px",
    fontWeight: "700",
  },
  firstSectionSubHead: {
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  formBoxText: {
    fontSize: "1rem",
    fontWeight: "700",
  },
  sectionBox: {
    alignItems: "center",
    display: "flex",
    gap: "0.3rem",
  },
  carSectionText: {
    fontSize: "3rem",
    fontWeight: "700",
    paddingY: "8px",
  },
  rateBox: {
    backgroundColor: "white",
    border: "1px solid back",
    padding: "16px",
  },
  rateBoxother: {
    display: "flex",
    justifyContent: "space-between",
    paddingY: "4px",
  },
}));

const TabComponent = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Box sx={{ bgcolor: "#101010", color: "#ffff" }}>
        <Tabs
          className={classes.Tabs}
          value={selectedTab}
          onChange={handleChange}
        >
          <Tab label="One Way" sx={{ color: "white" }} />
          <Tab label="By The Hour" sx={{ color: "white" }} />
        </Tabs>
        <Divider />

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "12px", textAlign: "center" }}
        >
          <Typography className={classes.formBoxText}>
            GET A PRICE & BOOK
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "12px", textAlign: "left" }}
        >
          <Typography className={classes.formBoxText}>Get My Acess</Typography>
          <TextField
            id="outlined-password-input"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            sx={{ border: "1px solid white" }}
            fullWidth
          />
        </Grid>
        {selectedTab === 0 && (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ padding: "12px", textAlign: "left" }}
          >
            <Typography className={classes.formBoxText}>Where From</Typography>
            <TextField
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              sx={{ border: "1px solid white" }}
              fullWidth
            />
          </Grid>
        )}
        {selectedTab === 1 && (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ padding: "12px", textAlign: "left" }}
          >
            <Typography className={classes.formBoxText}>How Long?</Typography>
            <TextField
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              sx={{ border: "1px solid white" }}
              fullWidth
            />
          </Grid>
        )}

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ padding: "12px", textAlign: "center" }}
        >
          <Button variant="contained">Get My Prices</Button>
        </Grid>
      </Box>
    </>
  );
};

export default TabComponent;
