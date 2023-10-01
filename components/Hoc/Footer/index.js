
import React from 'react'
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from "next/Image";
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid, Divider } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../../../public/Gallery/car-sold.png";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const useStyles = makeStyles((theme) => ({

  footer:{
    width: '100%',
    backgroundColor: '#101010',
    fontSize:'11px',
    color:'#ffff',
    height:'400px'
     
  },
  heading:
  {
    color:"#D7B65D",
  },
  footerCardButton:{
    color:"#D7B65D",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",
  },
  footerCardtext:{
    color:"#FFFFFF",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",
  },
  footerHeader:{
    color:"#D7B65D",
    fontSize:"20px",
    fontWeight:"700",
    fontFamily:"Montserrat",
    textTransform:"upperCase",
  

  },
  footersubHeader:{
    color:"#FFFFFF",
    fontSize:"14px",
    fontWeight:"400",
    fontFamily:"Montserrat",
 
  

  },
  footerendText:{
    color:"#9F9F9F",
    fontSize:"16px",
    fontWeight:"400",
    fontFamily:"Montserrat",
    marginTop:"8px",
    marginBottom:"8px"

  },
  divider:{
    backgroundColor:"#D7B65D",
     width:"75px",
      padding:"1px"
  }
}));
const Index = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%',  marginTop:'20px;',bgcolor: '#101010', color:'#ffff' }}>
        <Container sx={ {textAlign:'left'} }>
<Grid container spacing={2}>
    
  <Grid item xs={12} sm={12} md={3} lg={3}>

   <Typography className={classes.footerHeader}>Contact us</Typography>
   <Divider className={classes.divider}/>
   <Box sx={{display:"flex", alignItems:"center", gap:"1rem", paddingY:"6px", marginTop:"12px"}}>
    <FmdGoodIcon/>
   <Typography className={classes.footersubHeader}> SW118BN, United Kingdom <br/>515 Battersea Park Rd, London </Typography>
   </Box>
   <Box sx={{display:"flex", alignItems:"center", gap:"1rem", paddingY:"6px"}}>
    <WhatsAppIcon/>
   <Typography className={classes.footersubHeader}> +44 598440666 <br/>+44 598440666 <br/> +44 598440666 </Typography>
   </Box>
   <Box sx={{display:"flex", alignItems:"center", gap:"1rem", paddingY:"6px"}}>
    <EmailIcon/>
   <Typography className={classes.footersubHeader}> info@grandeurchauffeurs.co.uk </Typography>
   </Box>
  </Grid>
  <Grid item xs={12} sm={3} md={2} lg={2} sx={{display:"block"}}>

  <Typography className={classes.footerHeader}>Explore</Typography>
  <Divider className={classes.divider}/>
  <Typography className={classes.footersubHeader} sx={{paddingY:"6px", marginTop:"12px"}}> About Us </Typography>
  <Typography className={classes.footersubHeader} sx={{paddingY:"6px"}}> New Cars </Typography>
  <Typography className={classes.footersubHeader} sx={{paddingY:"6px"}}> Latest News </Typography>
  <Typography className={classes.footersubHeader} sx={{paddingY:"6px"}}> Gallery </Typography>
  <Typography className={classes.footersubHeader} sx={{paddingY:"6px"}}> Contact Us </Typography>
  </Grid>
  
  <Grid item xs={12} sm={12} md={3} lg={3}>

  <Typography className={classes.footerHeader}>Gallery</Typography>
  <Divider className={classes.divider}/>
  <br/>
  <Box sx={{gap:"1rem"}}>
  <Image
          component="img"
          width="100"
          url={logo}
          alt="green iguana"
        />
         <Image
          component="img"
          width="100"
          url={logo}
          alt="green iguana"
        />
         <Image
          component="img"
          width="100"
          url={logo}
          alt="green iguana"
        />
  <Image
          component="img"
          width="100"
          url={logo}
          alt="green iguana"
        />
  {/* <img src={logo} width={100} alt="Logo" />
  <img src={logo} width={100} alt="Logo" />
  <img src={logo} width={100} alt="Logo" />
  <img src={logo} width={100} alt="Logo" /> */}
  </Box>
</Grid>
<Grid item xs={12} sm={12} md={4} lg={4}>
<Typography className={classes.footerHeader}>Latest Posts</Typography>
<Divider className={classes.divider}/>
  <br/>
  <Card>
  <Grid container>
  <Grid item xs={3} sm={3} md={4} lg={4}>
 
  <CardMedia
        component="img"
        image={logo}
        alt="Live from space album cover"
      />
  {/* <img src={logo} width={100} alt="Logo" /> */}
    </Grid>
    <Grid item xs={9} sm={9} md={8} lg={8} sx={{backgroundColor:"#252525", padding:"8px"}}>
   
    <Typography  sx={{ color:"#FFFFFF",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",fontStyle:"normal"}}> New Comfort Chauffers </Typography>
    <Grid container sx={{paddingTop:"6px"}}>
    <Grid item xs={2} sm={2} md={1.5} lg={1.5}>
    <AccessTimeIcon fontSize='small' sx={{color:"white"}}/>
    </Grid>
      <Grid item xs={6} sm={6} md={7.5} lg={7.5}><Typography sx={{ color:"#FFFFFF",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",fontStyle:"normal"}}>December, 12 2023</Typography></Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Typography sx={{   color:"#D7B65D",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",}}>Read</Typography>
      </Grid>
    </Grid>
  
    </Grid>
  </Grid>
</Card>
<br/>
<Card>
  <Grid container>
  <Grid item xs={3} sm={3} md={4} lg={4}>
 
  <CardMedia
        component="img"
        image={logo}
        alt="Live from space album cover"
      />
  {/* <img src={logo} width={100} alt="Logo" /> */}
    </Grid>
    <Grid item xs={9} sm={9} md={8} lg={8} sx={{backgroundColor:"#252525", padding:"8px"}}>
   
    <Typography  sx={{ color:"#FFFFFF",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",fontStyle:"normal"}}> New Comfort Chauffers </Typography>
    <Grid container sx={{paddingTop:"6px"}}>
    <Grid item xs={2} sm={2} md={1.5} lg={1.5}>
    <AccessTimeIcon fontSize='small' sx={{color:"white"}}/>
    </Grid>
      <Grid item xs={6} sm={6} md={7.5} lg={7.5}><Typography sx={{ color:"#FFFFFF",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
   }}>December, 12 2023</Typography></Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Typography sx={{   color:"#D7B65D",
    fontSize:"14px",
    lineHeight:"17px",
    fontWeight:"700",
    fontFamily:"Montserrat",}}>Read</Typography>
      </Grid>
    </Grid>
  
    </Grid>
  </Grid>
</Card>
</Grid>
</Grid>
<Divider sx={{padding:"0.5px", color:"white", backgroundColor:"white",marginTop:"12px", marginBottom:"8px" }}/>

  <Grid container  sx={{paddingY:"8px"}}>
    <Grid item xs={12} sm={6} md={6} lg={6}>
<Typography className={classes.footerendText}>Copyright 2023 Grandeur Chauffeur, All Rights Reserved</Typography>
</Grid>
<Grid item xs={12} sm={6} md={6} lg={6} textAlign="end">
<FacebookRoundedIcon/> <InstagramIcon/> <LinkedInIcon/> <TwitterIcon/>
</Grid>
</Grid>


</Container>

  </Box>
  )
}

export default Index