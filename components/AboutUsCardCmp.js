import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import professional from "../public/Gallery/professional.jpg";
import styles from "./BookingTabs.module.css";
import Image from "next/Image";

export default function AboutUsCardCmp() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <Box className={styles.imagecontainer}>
          <Image src={professional} className={styles.image} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PROFESSIONALISM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our experienced staff and highly professional chauffeurs are
            committed to providing safe, reliable transportation, exceptional
            customer service, and consistent pricing. We provide in-house
            dispatchers who support our clients.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
