import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import professional from "../public/gallery/professional.jpg";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={professional}
          alt="green iguana"
        />
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
