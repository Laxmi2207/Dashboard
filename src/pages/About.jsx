
import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyNavbar from '../components/MyNavbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';

export default function About() {
  return (
    <>
    <div className='bgcolor'>
    <MyNavbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={4}>
              <Card sx={{ minWidth: "100%", height: 170 }} className='gradientblue'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                   Student
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                    13.7K
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                    172,458 Target Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ minWidth: "100%", height: 170 }} className='gradient'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                  Teacher
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                    41.6%
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                    472,458 Targeted Target users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ minWidth: "100%", height: 170 }} className='gradientorange'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                    Users
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                    19M
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                    172,456 Target Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{height:60+ "vh"}}>
                <CardContent>
                <GeoChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
            <Card sx={{height:60+ "vh"}}>
              <CardContent>
                <PieChart/>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
     
    </>
  );
}

