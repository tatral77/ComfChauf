import React from "react";
import { Container } from "@mui/system";
import Image from "next/Image";
import styles from "./HomeBanner.module.css";
import { Typography, useMediaQuery, useTheme, Box, Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import banner from "../public/gallery/old.png";
export default function HomeBanner() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  if (!isMatch) {
    return (
      <Grid
        container
        xs="none"
        spacing={2}
        sx={{ height: "350px", mt: "10px", mb: "70px", paddingTop:"100px"}}
      >
        <Grid
          className={styles.imagecontainer}
          item
          xs={12}
          md={5}
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          <div className={styles.image}>
            <Typography
              sx={{
                fontFamily: "Serif",
                fontSize: "3rem",
                color: "#D7B65D",
                fontWeight: "600",
                paddingTop: "100px",
                paddingLeft: "70px",
                textAlign: "center",
              }}
            >
              COMFORT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Serif",
                fontSize: "3rem",
                color: "#000000",
                fontWeight: "600",
                paddingLeft: "70px",
                textAlign: "center",
              }}
            >
              CHAUFFEURS
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#000000",
                fontWeight: "400",
                paddingLeft: "70px",
                textAlign: "center",
              }}
            >
              High Service For Every Customer
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={7} sx={{ backgroundColor: "#f7f7f7" }}>
          <div className={styles.imagecontainer}>
            <Image src={banner} layout="fill" className={styles.image} />
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Typography
        sx={{
          fontFamily: "Serif",
          fontSize: "2rem",
          color: "#D7B65D",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        BOOK YOUR RIDE
      </Typography>
    );
  }
}
