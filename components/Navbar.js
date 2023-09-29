import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import TopBar from "../components/TopBar";
import {
  AppBar,
  Tabs,
  Toolbar,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
  Link,
} from "@mui/material";
import DrawerControl from "../components/DrawerControl";
import logo from "../public/Gallery/comfort.png";
import Image from "next/image";
export default function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{ backgroundColor: "#404040" }} position="static">
      <Toolbar>
        {
          //if
          isMatch ? (
            <>
              <DrawerControl />
            </>
          ) : (
            <Container maxWidth="xl">
              <TopBar />
              <Grid
                container
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid item md={3}>
                  <Image src={logo} alt="logo" width={280} height={80}></Image>
                </Grid>
                <Grid item md={9}>
                  <Tabs
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="primary"
                    sx={{ marginLeft: "auto" }}
                    textColor="#fff"
                  >
                    <Tab label="Home" to="/"></Tab>
                    <Tab label="Services"></Tab>
                    <Tab label="Our Fleet"></Tab>
                    <Tab label="Contact Us"></Tab>
                    <Tab label="About Us"></Tab>
                  </Tabs>
                </Grid>
              </Grid>
            </Container>
          )
        }
      </Toolbar>
    </AppBar>
  );
}
