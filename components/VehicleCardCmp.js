import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import bmw from "../public/images/bmw.png";
import Image from "next/image";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

export default function VehicleCardCmp() {
  return (
    <Box sx={{ m: 4, position: "relative" }}>
      <Card
        sx={{
          maxWidth: 400,
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            backgroundColor: "#404040",
            color: "#D7B65D",
            textAlign: "center",
          }}
        >
          Mercedese Benz E Class
        </Typography>
        <Image sx={{ height: 140 }} src={bmw} title="BMW" />
        <CardContent sx={{ backgroundColor: "#f7f7f7" }}>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#404040",
            color: "white",
          }}
        >
          <BusinessCenterSharpIcon
            sx={{
              color: "#D7B65D",
              fontSize: 20,
            }}
          />
          <Typography sx={{ pl: 2, pt: 1, fontSize: 10 }}>
            2 Suitcase
          </Typography>
          <PersonSharpIcon
            sx={{
              color: "#D7B65D",
              fontSize: 20,
            }}
          />
          <Typography sx={{ pt: 1, fontSize: 10 }}>4 Passengers</Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
