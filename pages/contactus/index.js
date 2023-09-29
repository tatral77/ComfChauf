import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import contactImage from "../../public/images/contactus.jpg";
import styles from "./contactus.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactnumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  if (!isMatch) {
    return (
      <Box sx={{ height: "100vh" }}>
        <Grid
          container
          ml={2}
          mr={4}
          direction="column"
          alignItems="center"
          //justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, backgroundColor: "#f7f7f7" }}>
              <Typography
                variant="h4"
                align="center"
                mb={4}
                sx={{ color: "#D7B65D" }}
                className={styles.gradiantheader}
              >
                CONTACT US
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  pl={6}
                >
                  <Grid item xs="none" md={6}>
                    <Box className={styles.imagecontainer}>
                      <Typography variant="h6">
                        Comfort Chauffeurs Transportation Services
                      </Typography>
                      <Typography variant="body1">
                        515 Battersea Park Rd, London SW11 8BN, United Kingdom
                      </Typography>
                      <Typography variant="body1">
                        Phone: +447932069692 (WhatsApp)
                      </Typography>
                      <Typography variant="body1">
                        Phone: +447770241111
                      </Typography>
                      <Typography variant="body1">
                        Office: +44 20 3617 1118
                      </Typography>
                      <Typography variant="body1">
                        Phone: +447984440666
                      </Typography>
                      <Typography variant="body1">
                        Office: +44 20 3617 1118
                      </Typography>
                      <Typography variant="body1">
                        Email:comfortchauffeurs@live.com
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      margin="normal"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Contact Number"
                      value={contactnumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      margin="normal"
                      required
                      type="email"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin="normal"
                      required
                      type="email"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      margin="normal"
                      required
                      multiline
                      rows={4}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 2, backgroundColor: "black", color: "#D7B65D" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box sx={{ height: "100vh" }}>
        <Grid
          ml={2}
          mr={4}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2, backgroundColor: "#f7f7f7" }}>
              <Typography
                variant="h4"
                align="center"
                mb={4}
                sx={{ color: "#D7B65D" }}
                className={styles.gradiantheader}
              >
                CONTACT US
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      margin="normal"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Contact Number"
                      value={contactnumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      margin="normal"
                      required
                      type="email"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      margin="normal"
                      required
                      type="email"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      margin="normal"
                      required
                      multiline
                      rows={4}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 2, backgroundColor: "black", color: "#D7B65D" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
