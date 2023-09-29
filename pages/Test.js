import React from "react";
import logo from "../public/Images/mercedes-benz.png";
import logo2 from "../public/Images/location.png";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Grid, Card, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Tabs from "../components/Tabs";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Porsche from "../public/Images/Porsche.png";
import BMW from "../public/Images/BMW.png";
import Mercedes from "../public/Images/mercedes.png";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Posts from "../Components/Posts";
import Image from "next/Image";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#D7B65D",
  },
  headerGrid: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "flex-end",
  },
  header: {
    width: "100%",
    backgroundColor: "#404040",
    fontSize: "11px",
    color: "#ffff",
  },
  wrap: {
    height: "100%",
  },
  image: {
    display: "block",
    left: "65%",
    top: "55%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    zIndex: 1,
    overflow: "hidden",
    width: "687px",
  },
  image2: {
    display: "block",
    left: "70%",
    top: "35%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    overflow: "hidden",
    width: "580px",
  },
  div2: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  div1: {
    backgroundColor: "#FFFFF",
    width: "100%",
    height: "60%",
    float: "left",
    color: "black",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ height: "800px" }}>
        <div className={classes.wrap}>
          <Container sx={{ display: { xs: "none", sm: "block" } }}>
            <img src={logo2} alt="Logo" className={classes.image2} />
            <img src={logo} alt="Logo" className={classes.image} />
          </Container>
          <div className={classes.div1}>
            <Box sx={{ marginTop: "99px" }}>
              <br />

              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Container>
                    <Typography
                      sx={{
                        fontSize: "3rem",
                        color: "#D7B65D",
                        fontWeight: "600",
                        paddingBottom: "1px",
                      }}
                    >
                      Grandeur{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "3rem",
                        color: "#000000",
                        fontWeight: "600",
                      }}
                    >
                      Chauffer
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        color: "#000000",
                        fontWeight: "400",
                      }}
                    >
                      High Service For Every Customer
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className={classes.div2}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Container sx={{ marginTop: "42px", marginBottom: "22px" }}>
                  <Tabs />
                </Container>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          marginTop: "20px;",
          bgcolor: "#101010",
          color: "#ffff",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
          }}
        >
          Our Fleet
        </Typography>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Box
                  sx={{
                    textAlign: "right",
                    marginTop: "1px",
                    flexGrow: 1,
                    position: "absolute",
                  }}
                >
                  <IconButton
                    sx={{ backgroundColor: "#141414", padding: "12px" }}
                  >
                    <FmdGoodIcon color="primary" />
                  </IconButton>
                </Box>
                <Card
                  sx={{
                    backgroundColor: "#1E1D1A",
                    color: "white",
                    borderRadius: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <Grid container sx={{ paddingX: "21px", paddingY: "16px" }}>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="left">
                      <Typography>Porsche Model</Typography>
                      <Typography>2021</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="right">
                      <Typography>
                        150${" "}
                        <span
                          style={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          /DAY
                        </span>
                      </Typography>

                      <FmdGoodIcon />
                      <Typography
                        sx={{
                          color: "#FFFFFF99",
                          fontWeight: "300",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        uk, London
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "12px" }}
                    >
                      <Image src={Porsche} />
                    </Grid>
                    <Grid container spacing={4} sx={{ padding: "24px" }}>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          3 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Box
                  sx={{
                    textAlign: "right",
                    marginTop: "1px",
                    flexGrow: 1,
                    position: "absolute",
                  }}
                >
                  <IconButton
                    sx={{ backgroundColor: "#141414", padding: "12px" }}
                  >
                    <FmdGoodIcon color="primary" />
                  </IconButton>
                </Box>
                <Card
                  sx={{
                    backgroundColor: "#1E1D1A",
                    color: "white",
                    borderRadius: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <Grid container sx={{ paddingX: "21px", paddingY: "16px" }}>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="left">
                      <Typography>Porsche Model</Typography>
                      <Typography>2021</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="right">
                      <Typography>
                        150${" "}
                        <span
                          style={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          /DAY
                        </span>
                      </Typography>

                      <FmdGoodIcon />
                      <Typography
                        sx={{
                          color: "#FFFFFF99",
                          fontWeight: "300",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        uk, London
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "12px" }}
                    >
                      <img src={Mercedes} />
                    </Grid>
                    <Grid container spacing={4} sx={{ padding: "24px" }}>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          3 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box>
                <Box
                  sx={{
                    textAlign: "right",
                    marginTop: "1px",
                    flexGrow: 1,
                    position: "absolute",
                  }}
                >
                  <IconButton
                    sx={{ backgroundColor: "#141414", padding: "12px" }}
                  >
                    <FmdGoodIcon color="primary" />
                  </IconButton>
                </Box>
                <Card
                  sx={{
                    backgroundColor: "#1E1D1A",
                    color: "white",
                    borderRadius: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <Grid container sx={{ paddingX: "21px", paddingY: "16px" }}>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="left">
                      <Typography>Porsche Model</Typography>
                      <Typography>2021</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} textAlign="right">
                      <Typography>
                        150${" "}
                        <span
                          style={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          /DAY
                        </span>
                      </Typography>

                      <FmdGoodIcon />
                      <Typography
                        sx={{
                          color: "#FFFFFF99",
                          fontWeight: "300",
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        uk, London
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{ marginTop: "12px" }}
                    >
                      <Image src={BMW} />
                    </Grid>
                    <Grid container spacing={4} sx={{ padding: "24px" }}>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          3 seats
                        </Typography>
                      </Grid>
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Box
                          sx={{
                            backgroundColor: "#141414",
                            padding: "6px",
                            color: "",
                          }}
                        >
                          <EventSeatIcon color="primary" />
                        </Box>
                        <Typography
                          sx={{
                            color: "#FFFFFF99",
                            fontWeight: "300",
                            fontSize: "14px",
                          }}
                        >
                          2 seats
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={4}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={4}>
            <Posts></Posts>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
