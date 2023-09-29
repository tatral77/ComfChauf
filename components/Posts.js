import { Margin } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image2 from "../public/Images/image7.png";

const index = () => {
  return (
    <Box>
      <Container sx={{ marginTop: "42px", marginBottom: "22px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="360"
              image={image2} //"/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Container>
                <Grid Container>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography>Icon 1</Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography>Icon 2</Typography>
                  </Grid>
                </Grid>
              </Container>
              <Typography gutterBottom variant="h6" component="div">
                High end Customer Satisfaction
              </Typography>
              <Typography sx={{}} variant="body2" color="text.secondary">
                The price of tickets for low-cost airlines for a specific route
                has a much larger spread
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Box>
  );
};

export default index;
