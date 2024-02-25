import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StudentList from './student/StudentList';

export default function Student() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box sx={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Student
          </Typography>
          <StudentList />
        </Box>
      </Box>
    </>
  );
}
