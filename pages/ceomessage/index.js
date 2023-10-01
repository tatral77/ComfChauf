import { Box, Typography, Grid, Item, Container } from "@mui/material";
import PageHeading from "../../controls/PageHeading";
import Image from "next/Image";
import styles from "./ceomessage.module.css";
import banner from "../../public/gallery/ceo.jpg";
import AboutUsCardCmp from "../../components/AboutUsCardCmp";
export default function CeoMessage() {
  return (
    <Container>
      <Box sx={{ height: "100vh" }} mt={6}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Box className={styles.imagecontainer}>
              <Image src={banner} className={styles.image} />
            </Box>
          </Grid>
          <Grid item md={8}>
            <PageHeading title="Message from the CEO" />
            <Box className={styles.para1} sx={{ pt: 4 }}>
              Dear Valued Customers,
            </Box>
            <Box className={styles.para1} sx={{ pt: 4 }}>
              I hope this message finds you well. I wanted to take a moment to
              personally connect with you, our cherished clients, and share some
              exciting updates regarding Comfort Chauffeurs.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              First and foremost, I want to express our sincere gratitude for
              choosing Comfort Chauffeurs for your transportation needs. We
              understand that you have many options, and we are truly honored to
              have your trust.
            </Box>

            <Box className={styles.para1} sx={{ pt: 2 }}>
              As the CEO of Comfort Chauffeurs, I want you to know that your
              satisfaction is our top priority. We are dedicated to providing
              you with the best possible chauffeuring experience, and we are
              constantly working to improve our services.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              In response to your feedback and the changing landscape of our
              industry, we have some exciting developments in the pipeline:
            </Box>

            <Box className={styles.para1} sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Expanded Fleet:
              </Typography>
              We are investing in our fleet to offer you an even wider range of
              luxury vehicles, including eco-friendly options, to cater to your
              specific preferences and needs.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Advanced Technology:
              </Typography>
              Our commitment to technology means smoother booking processes,
              real-time updates, and a more convenient overall experience when
              you choose Comfort Chauffeurs.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Safety and Training:
              </Typography>
              Your safety remains paramount to us. We are enhancing our safety
              protocols and continuing to train our chauffeurs to ensure they
              are the best in the industry.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Sustainability:
              </Typography>
              We are actively working on reducing our environmental impact by
              exploring sustainable energy sources and making environmentally
              responsible choices in our operations.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Enhanced Customer Service:
              </Typography>
              Your satisfaction is at the heart of everything we do. We will
              continue to refine our customer service to exceed your
              expectations at every interaction.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              These initiatives reflect our dedication to providing you with a
              superior chauffeuring experience and align with our mission to set
              the industry standard for luxury and reliability.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              Please feel free to reach out to us with any questions, concerns,
              or feedback you may have. Your input is invaluable as we continue
              to refine and improve our services.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              Thank you for choosing Comfort Chauffeurs. We look forward to
              serving you and exceeding your expectations in the years to come.
              Your trust in us drives our commitment to excellence.
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              Warm regards,
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              BILAL AKBAR
            </Box>
            <Box className={styles.para1} sx={{ pt: 2 }}>
              CEO, Comfort Chauffeurs
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
