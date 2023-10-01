import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Button, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import UpdateIcon from '@mui/icons-material/Update';
import ExploreIcon from '@mui/icons-material/Explore';
import ForkRightIcon from '@mui/icons-material/ForkRight';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const router = useRouter();

  const fabs = [
    {
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: '#101010', borderRadius: '8px', width: '310px' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="action tabs example"
        >
          <Tab label="Distance" sx={{ color: 'white' }} {...a11yProps(0)} />
          <Tab label="Hourly" sx={{ color: 'white' }} {...a11yProps(1)} />
          <Tab label="Flat Rate" sx={{ color: 'white' }} {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* Distance Tab */}
        <TabPanel
          value={value}
          index={0}
          sx={{ backgroundColor: '#101010', borderRadius: '8px' }}
        >
          <Grid container>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography sx={{ fontSize: '16px', fontWeight: '500', color: 'white' }}>
                Pickup Address
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <FmdGoodIcon color="primary" />
                <Typography sx={{ fontSize: '14px', fontWeight: '500', color: 'white' }}>
                  Enter Location
                </Typography>
              </Box>
            </Grid>
            {/* Add more form elements here for the Distance tab */}
            {/* ...
                ... */}
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              // Handle the search button click for the Distance tab
              router.push('/search-distance'); // Replace with your actual search page
            }}
          >
            Search
          </Button>
        </TabPanel>

        {/* Hourly Tab */}
        <TabPanel
          value={value}
          index={1}
          sx={{ backgroundColor: '#101010', borderRadius: '8px' }}
        >
          <Grid container>
            {/* Add form elements for the Hourly tab */}
            {/* ...
                ... */}
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              // Handle the search button click for the Hourly tab
              router.push('/search-hourly'); // Replace with your actual search page
            }}
          >
            Search
          </Button>
        </TabPanel>

        {/* Flat Rate Tab */}
        <TabPanel
          value={value}
          index={2}
          sx={{ backgroundColor: '#101010', borderRadius: '8px' }}
        >
          <Grid container>
            {/* Add form elements for the Flat Rate tab */}
            {/* ...
                ... */}
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              // Handle the search button click for the Flat Rate tab
              router.push('/search-flat-rate'); // Replace with your actual search page
            }}
          >
            Search
          </Button>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
