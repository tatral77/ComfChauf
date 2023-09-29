import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function TopBar() {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
      <Container>
        <Grid container sx={{ paddingY: "16px" }}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}
          >
            <LocalPhoneIcon
              sx={{
                color: "#D7B65D",
              }}
            />{" "}
            <Typography>+44 20 3617 1118</Typography>
            <MailOutlineIcon
              sx={{
                color: "#D7B65D",
              }}
            />{" "}
            <Typography>comfortchauffeurs@live.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
