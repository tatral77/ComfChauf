import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../public/Images/logo.png";
import Image from "next/image";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
  Box,
} from "@mui/material";

export default function DrawerControl() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ backgroundColor: "red", color: "#ffffff" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{ textColor: "white" }}>
                  Services
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Our Fleet</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>About Us</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#ffffff" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {" "}
        <MenuIcon />
      </IconButton>
      <Box sx={{ justifyContent: "center", alignItems: "center" }}>
        <Image src={logo} alt="logo" width={280} height={80} alt="logo"></Image>
      </Box>
    </React.Fragment>
  );
}
