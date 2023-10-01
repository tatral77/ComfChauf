import { Box, Typography, Grid, Item, Container } from "@mui/material";
import PageHeading from "../../controls/PageHeading";
import Image from "next/Image";
import styles from "./about.module.css";
import banner from "../../public/gallery/comfort.jpg";
import comitment from "../../public/gallery/comitment.jpg";
import AboutUsCardCmp from "../../components/AboutUsCardCmp";
import professional from "../../public/Gallery/professional.jpg";

export default function AboutUs() {
  return (
    <Container>
      <Box mt={6}>
        <Grid container spacing={4}>
          <Grid item md={12} xs={12}>
            <PageHeading title="ABOUT US" />
          </Grid>
          <Grid item md={6}>
            <Box className={styles.imagecontainer}>
              <Image src={banner} className={styles.image} />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={styles.para2} sx={{ pt: 4 }}>
              At Comfort Chauffeur we pride ourselves in delivering extensive
              services to fulfill all of your needs with first rate customer
              care.
            </Box>
            <Box className={styles.para1} sx={{ pt: 4 }}>
              By offering exceptional service with no detail unattended, we have
              been fortunate enough to have developed into the leading provider
              of ground transportation in the area. Our goal is to make your
              travels safe, effortless and on schedule.
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#f7f7f7", mt: 4 }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "22pt", pt: 4, pb: 4 }}
        >
          OUR COMPETENCES
        </Typography>
        <Box className={styles.wrapper}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box className={styles.imagecontainer}>
                <Image src={professional} className={styles.image} />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={styles.para2} sx={{ pt: 4 }}>
                PROFESSIONALISM
              </Box>
              <Box className={styles.para1} sx={{ pt: 4 }}>
                Our experienced staff and highly professional chauffeurs are
                committed to providing safe, reliable transportation,
                exceptional customer service, and consistent pricing. We provide
                in-house dispatchers who support our clients.
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.wrapper}>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Box className={styles.imagecontainer}>
                <Image src={comitment} className={styles.image} />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={styles.para2} sx={{ pt: 4 }}>
                COMMITMENT
              </Box>
              <Box className={styles.para1} sx={{ pt: 4 }}>
                Our office is open twenty four hours a day, seven days a week.
                You name the occasion – we’ll make the ride flawless. Whether
                you require a chauffeured vehicle for business or pleasure,
                close to home or in a new city we are always there.
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
