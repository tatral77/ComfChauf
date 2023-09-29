import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  useMediaQuery,
  useTheme,
  Container,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import styles from "./fleetcard.module.css";
import banner from "../public/gallery/mercedes-benz-banner.png";
import viano from "../public/gallery/mercedes-viano-2.png";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import ButtonCtl from "../controls/ButtonCtl";
//www.kerbeckcars.com/new-vehicle-2016-rolls-royce-ghost-series-ii-c-803/#details-6
export default function FleetCardCm() {
  return (
    <Container maxWidth="lg">
      <Box className={styles.heading}>
        <Typography variant="Body1">OUR FLEET</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="Body2" mb={2}>
          Our chauffeur driven fleets are drawn from the luxury ranges of the
          world’s finest marques, such as Mercedes S-class, Mercedes V-class,
          Mercedes E-class, Rolls Royce phantom, Bentley Mulsanne and Range
          rover LWB. Each vehicle is specified to our demanding standards. The
          perfect balance of spacious comfort and safety.
        </Typography>
      </Box>
      <Grid
        container
        xs="none"
        spacing={2}
        sx={{
          minHeight: "250px",
          mt: "10px",
          mb: "10px",
          borderColor: "#D7B65D",
          borderStyle: "solid",
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#f7f7f7" }}
          justify="center"
          alignItems="center"
        >
          <Box className={styles.imagecontainer}>
            <Image src={banner} className={styles.image} />
          </Box>
        </Grid>
        <Grid
          className={styles.imagecontainer}
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          <Typography variant="h5" className={styles.cardheading}>
            Mercedese Benz S Class
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <BusinessCenterSharpIcon />
              </ListItemIcon>
              <ListItemText primary="1 Suitcase" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonSharpIcon />
              </ListItemIcon>
              <ListItemText primary="3 Passangers" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        container
        xs="none"
        spacing={2}
        sx={{
          minHeight: "250px",
          mt: "10px",
          mb: "10px",
          borderColor: "#D7B65D",
          borderStyle: "solid",
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#f7f7f7" }}
          justify="center"
          alignItems="center"
        >
          <div className={styles.imagecontainer}>
            <Image src={viano} className={styles.image} />
          </div>
        </Grid>
        <Grid
          className={styles.imagecontainer}
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          <Typography variant="h5" pl={4} className={styles.cardheading}>
            Mercedese Viano
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <BusinessCenterSharpIcon />
              </ListItemIcon>
              <ListItemText primary="6 Suitcases" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonSharpIcon />
              </ListItemIcon>
              <ListItemText primary="7 Passangers" />
            </ListItem>
          </List>
          <Box sx={{ ml: 10 }}>
            <ButtonCtl value="Book Now" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
