
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Paper,
} from '@mui/material';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';
import '../css/Register.css';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',


    email: '',
    role: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber' && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });


  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send a POST request to your Spring Boot API
      const response = await axios.post('http://localhost:8080/register/users/register', formData);

      if (response.status === 201) {
        console.log('Registration successful');
        // You can redirect the user to a login page or display a success message here.
      } else {
        console.error('Registration failed with status code:', response.status);
        console.error('Response data:', response.data);
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status code:', error.response.status);
        console.error('Response data:', error.response.data);
        setError('Registration failed. Please try again.');
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received from the server');
        setError('Registration failed. Please try again.');
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up the request:', error.message);
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Fragment>
    <TopNavbar />
    <div className="form-container">
      <Container maxWidth="sm">
        <Paper elevation={3} className="register-card">
          <Typography variant="h4" gutterBottom>
            Registration Page
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Role"
                  variant="outlined"
                  fullWidth
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required />
              </Grid>
              <Grid item xs={12}>
                {error && <Typography variant="body2" color="error">{error}</Typography>}
                <Button
                  type="submit"
                  variant="contained"
                  style={{backgroundColor: '#401664',color: '#fff',padding: '14px 170px',cursor: 'pointer',transition: 'background-color 0.3s'
                        }}
                  fullWidth
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default RegistrationForm;
