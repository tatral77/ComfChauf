// pages/DrawerAppBar.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Image from "next/Image";
import Link from 'next/link';
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../public/Gallery/Comfort.png";
import { AboutUsData, OurCarsData, HeaderData, OurCompanyData } from "./data";
import DropDownMenu from "./Dropdown";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import styles from "./Navbar.module.css"
// import {
//   MemoryRouter,
//   Route,
//   Routes,
//   Link,
//   matchPath,
//   useLocation,
// } from "react-router-dom";



const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [menuType, setMenuType] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDropdownLeave = () => {};
  const handleOpenDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        <Image src={logo} width={114} alt="Logo" />
       
        </Typography>
        <Divider />
        <List>
          
          <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"About Us"} />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Contact us"} />
            </ListItemButton>
            </ListItem>
   
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar component="nav" sx={{ backgroundColor: "#404040" }}>
          <Container sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}>
            <Box className={styles.header}>
              <Grid container sx={{ paddingY: "8px" }}>
                <Grid item xs={12} md={12} lg={12} className={styles.headerGrid}>
                  <LocalPhoneIcon className={styles.icon} />{" "}
                  <Typography>(1)-212-333-4343</Typography>
                  <MailOutlineIcon className={styles.icon} />{" "}
                  <Typography>reserve@limokingtheme.com</Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block", md: "block" },
                }}
              >
                  <Image src={logo} width={214} alt="Logo" />
                
              </Typography>
              <Box
             
             sx={{
               display: { xs: "flex", md: "none", sm: "none" },
               flexDirection: "row",
               justifyContent: "center",
               alignItems: "center",
               paddingLeft:"90px",
             }}
           >
              <Image src={logo} width={114} alt="Logo" sx={{textAlign:"center"}} />
              </Box>
              <Box
             
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex", gap: "3rem" },
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link  href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <Typography sx={{ paddingRight: "25px", cursor: "pointer", color: "white" }}>
                    Home
                  </Typography>
                </Link>
                {HeaderData.map((headerdata, index) => {
                  return <DropDownMenu title={headerdata.name}  />;
                })}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", gap: "3rem" },
                }}
              >
                <PersonIcon className={styles.icon} />{" "}
                <ShoppingBagIcon className={styles.icon} />{" "}
                <SearchIcon className={styles.icon} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdown}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuType == "About Us" &&
          AboutUsData.map((aboutusdata) => {
            return (
              <>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Tab
                    label={aboutusdata.name}
                    value={aboutusdata.value}
                    // to={aboutusdata.link}
                    // component={Link}
                  />
                </MenuItem>
              </>
            );
          })}
        {menuType == "Our Cars" &&
          OurCarsData.map((ourcarsdata) => {
            return (
              <>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Tab
                    label={ourcarsdata.name}
                    value={ourcarsdata.value}
                    // to={ourcarsdata.link}
                    // component={Link}
                  />
                </MenuItem>
              </>
            );
          })}
        {menuType == "Our Company" &&
          OurCompanyData.map((ourcompanydata) => {
            return (
              <>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Tab
                    label={ourcompanydata.name}
                    value={ourcompanydata.value}
                    // to={ourcompanydata.link}
                    // component={Link}
                  />
                </MenuItem>
              </>
            );
          })}
      </Menu>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
