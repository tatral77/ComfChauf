import { green, grey } from "@mui/material/colors";
import { THEMES } from "./constants";

const customGold = {
  50: "#D7B65D",
  100: "#D7B65D",
  200: "#D7B65D",
  300: "#D7B65D",
  400: "#D7B65D",
  // 500: "#4782da",
  // 600: "#407ad6",
  // 700: "#376fd0",
  800: "#D7B65D",
  900: "#D7B65D",
  700: "#D7B65D",
  500: "#D7B65D",
  600: "#D7B65D",
};

const defaultVariant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: "light",
    primary: {
      main: "#D7B65D",
      dark: "#D7B65D"
    },
    secondary: {
      main: "#D7B65D",
      contrastText: "#FFF",
    },
    background: {
      // default: "#F7F9FC",
      default: "#FFF",
      paper: "#FFF",
    },
    redColor: {
      default: "#FC3652",
      paper: "#FFF",

    },
  },
  header: {
    color: grey[500],
    background: "#FFF",
    search: {
      color: grey[800],
    },
    indicator: {
      background: customGold[600],
    },
  },
  footer: {
    color: grey[500],
    background: "#FFF",
  },
  sidebar: {
    color: grey[200],
    background: "#233044",
    header: {
      color: grey[200],
      background: "#233044",
      brand: {
        color: customGold[500],
      },
    },
    footer: {
      color: grey[200],
      background: "#1E2A38",
      online: {
        background: green[500],
      },
    },
    badge: {
      color: "#FFF",
      background: customGold[500],
    },
  },
};

// const darkVariant = merge(defaultVariant, {
//   name: THEMES.DARK,
//   palette: {
//     mode: "dark",
//     primary: {
//       main: customBlue[600],
//       contrastText: "#FFF",
//     },
//     background: {
//       default: "#1B2635",
//       paper: "#233044",
//     },
//     text: {
//       primary: "rgba(255, 255, 255, 0.95)",
//       secondary: "rgba(255, 255, 255, 0.5)",
//     },
//   },
//   header: {
//     color: grey[300],
//     background: "#1B2635",
//     search: {
//       color: grey[200],
//     },
//   },
//   footer: {
//     color: grey[300],
//     background: "#233044",
//   },
// });

// const lightVariant = merge(defaultVariant, {
//   name: THEMES.LIGHT,
//   palette: {
//     mode: "light",
//   },
//   header: {
//     color: grey[200],
//     background: customBlue[800],
//     search: {
//       color: grey[100],
//     },
//     indicator: {
//       background: red[700],
//     },
//   },
//   sidebar: {
//     color: grey[900],
//     background: "#FFF",
//     header: {
//       color: "#FFF",
//       background: customBlue[800],
//       brand: {
//         color: "#FFFFFF",
//       },
//     },
//     footer: {
//       color: grey[800],
//       background: "#F7F7F7",
//       online: {
//         background: green[500],
//       },
//     },
//   },
// });

// const blueVariant = merge(defaultVariant, {
//   name: THEMES.BLUE,
//   palette: {
//     mode: "light",
//   },
//   sidebar: {
//     color: "#FFF",
//     background: customBlue[700],
//     header: {
//       color: "#FFF",
//       background: customBlue[800],
//       brand: {
//         color: "#FFFFFF",
//       },
//     },
//     footer: {
//       color: "#FFF",
//       background: customBlue[800],
//       online: {
//         background: "#FFF",
//       },
//     },
//     badge: {
//       color: "#000",
//       background: "#FFF",
//     },
//   },
// });

// const greenVariant = merge(defaultVariant, {
//   name: THEMES.GREEN,
//   palette: {
//     primary: {
//       main: green[800],
//       contrastText: "#FFF",
//     },
//     secondary: {
//       main: green[500],
//       contrastText: "#FFF",
//     },
//   },
//   header: {
//     indicator: {
//       background: green[600],
//     },
//   },
//   sidebar: {
//     color: "#FFF",
//     background: green[700],
//     header: {
//       color: "#FFF",
//       background: green[800],
//       brand: {
//         color: "#FFFFFF",
//       },
//     },
//     footer: {
//       color: "#FFF",
//       background: green[800],
//       online: {
//         background: "#FFF",
//       },
//     },
//     badge: {
//       color: "#000",
//       background: "#FFF",
//     },
//   },
// });

// const indigoVariant = merge(defaultVariant, {
//   name: THEMES.INDIGO,
//   palette: {
//     primary: {
//       main: indigo[600],
//       contrastText: "#FFF",
//     },
//     secondary: {
//       main: indigo[400],
//       contrastText: "#FFF",
//     },
//   },
//   header: {
//     indicator: {
//       background: indigo[600],
//     },
//   },
//   sidebar: {
//     color: "#FFF",
//     background: indigo[700],
//     header: {
//       color: "#FFF",
//       background: indigo[800],
//       brand: {
//         color: "#FFFFFF",
//       },
//     },
//     footer: {
//       color: "#FFF",
//       background: indigo[800],
//       online: {
//         background: "#FFF",
//       },
//     },
//     badge: {
//       color: "#000",
//       background: "#FFF",
//     },
//   },
// });

// const theme = {
//   palette: {
//     primary: {
//       main: "#06BDFF",
//       dark: "0638c1",
//     },
//   },
// };

const variants = [
  defaultVariant,
  // darkVariant,
  // lightVariant,
  // blueVariant,
  // greenVariant,
  // indigoVariant,
  // theme,
];

export default variants;
