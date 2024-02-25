import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, city, course, about, address) {
  return { name, city, course, about, address };
}

const initialFormData = {
  name: '',
  city: '',
  course: '',
  about: '',
  address: '',
};

export default function StudentList() {
  const [rows, setRows] = useState([
    createData('laxmi', 'Aligarh', 'React js', 'React js is a frontend technology', 'Aligarh'),
    createData('kuku', 'Delhi', 'fullstack', 'FullStack is a frontend & backend technology', 'Delhi'),
    createData('kuldeep', 'Agra', 'java', 'java is a backend technology', 'Agra'),
  ]);

  const [formData, setFormData] = useState(initialFormData);
  const [editIndex, setEditIndex] = useState(null);

  const isFormValid = () => {
    return Object.values(formData).every(value => value !== '' && value !== null);
  };

  const addRow = () => {
    if (!isFormValid()) {
      alert('Please fill in all fields before saving.');
      return;
    }

    if (editIndex !== null) {
      // Update existing row
      const updatedRows = [...rows];
      updatedRows[editIndex] = formData;
      setRows(updatedRows);
      setEditIndex(null);
    } else {
      // Add new row
      setRows([...rows, formData]);
    }

    setFormData(initialFormData);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const editRow = (index) => {
    setFormData(rows[index]);
    setEditIndex(index);
  };

  return (
    <Box p={3}>
      <Card>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addRow();
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <TextField
                  label="Student"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  fullWidth
                  margin="normal"
                  size="small"
                />
                <TextField
                  label="city"
                  type="name"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: (e.target.value) })}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </div>
              <div style={{ width: '48%' }}>
                <TextField
                  label="course"
                  type="name"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: (e.target.value) })}
                  fullWidth
                  margin="normal"
                  size="small"
                />
                <TextField
                  label="about"
                  type="name"
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: (e.target.value)})}
                  fullWidth
                  margin="normal"
                  size="small"
                />
                <TextField
                  label="address"
                  type="name"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: (e.target.value) })}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              </div>
            </div>
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '15px', marginLeft: '48%' }}>
              {editIndex !== null ? 'Update Row' : 'Add Row'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Course&nbsp;</TableCell>
              <TableCell align="right">About&nbsp;</TableCell>
              <TableCell align="right">Address&nbsp;</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.about}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" color="primary" onClick={() => editRow(index)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => deleteRow(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}