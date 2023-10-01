

import { createTheme as createMuiTheme } from "@mui/material/styles";
import typography from "./typography";
import variants from "./variant";


const createTheme = (name) => {
  let themeConfig = variants.find((variant) => variant.name === name);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  return createMuiTheme(
    {
      spacing: 4,
      typography: typography,
    //   breakpoints: breakpoints,
    
    //   components: components,
    //   typography: typography,
    //   shadows: shadows,
     palette: themeConfig.palette,
    },
    // {
    //   name: themeConfig.name,
    //   header: themeConfig.header,
    //   footer: themeConfig.footer,
    //   sidebar: themeConfig.sidebar,
    // }
  );
};

export default createTheme;
