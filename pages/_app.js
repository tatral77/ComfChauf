// pages/_app.js

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '../components/Themes/theme'; // Import your custom theme here
import '../styles/globals.css'; // Import your global styles here
import Navbar from '../components/Hoc/Header/index';
import Footer from "../components/Hoc/Footer/index"
function MyApp({ Component, pageProps }) {
  const themee = createTheme; // Remove the '(theme)' part

  return (
    <ThemeProvider theme={themee}>
      <CssBaseline />
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
