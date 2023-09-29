import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HourlyBooking from "../components/HourlyBooking";
//import styles from "../BookingTabs.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ mt: "0px" }}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          borderBottom: 0,
          borderColor: "black",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Tabs
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          aria-label="booking"
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab
            sx={{
              backgroundColor: "black",
              color: "white",
              "&.Mui-selected": {
                color: "#D7B65D",
              },
              borderTopLeftRadius: 20,
            }}
            label="HOURLY"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              backgroundColor: "black",
              "&.Mui-selected": {
                color: "#D7B65D",
              },
              color: "white",
            }}
            label="DISTANCE"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              backgroundColor: "black",
              color: "white",
              "&.Mui-selected": {
                color: "#D7B65D",
              },
              borderTopRightRadius: 20,
            }}
            label="FLAT RATE"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "solid",
            height: "150px",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            pl: "100px",
          }}
        >
          <HourlyBooking />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} sx={{ backgroundColor: "red" }}>
        <Box
          sx={{
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "solid",
            height: "150px",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          Item Two
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          sx={{
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "solid",
            height: "150px",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          Item Two
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
