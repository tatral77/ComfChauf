import { Box, Typography, Grid, Item, Container } from "@mui/material";
import PageHeading from "../../controls/PageHeading";
import Image from "next/Image";
import styles from "./about.module.css";
import banner from "../../public/gallery/comfort.jpg";
export default function AboutUs() {
  return (
    <Container>
      <Box sx={{ height: "100vh" }} mt={6}>
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
    </Container>
  );
}
