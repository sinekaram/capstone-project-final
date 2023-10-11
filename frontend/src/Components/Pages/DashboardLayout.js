import React, { useState, useEffect, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoanTypes from './LoanTypes';
import Footer from '../Footer/Footer';
import '../css/dashboardlayout.css'; // Include your CSS file here
import Header from '../Header/Header';

const API_URL = 'http://localhost:8090/api';
const email = sessionStorage.getItem("email"); // Retrieve email from session storage


function DashboardLayout({ id }) {
  const user = { id: id };
  const [openLoanTypesDialog, setOpenLoanTypesDialog] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8082/users/${id}`)
      .then((response) => {
        const userData = response.data;
        // You can use userData if needed
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
    },[id]);


  const carouselImages = [
    '/Images/image1.jpg',
  '/Images/image2.jpg',
  '/Images/image3.jpg',
  ];

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleOpenLoanTypesDialog = () => {
    setOpenLoanTypesDialog(true);
  };

  const handleCloseLoanTypesDialog = () => {
    setOpenLoanTypesDialog(false);
  };

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  return (
    <Fragment>
      <Header />
      <div className="dashboard-container">
        <AppBar position="static" className="app-bar" style={{ backgroundColor: 'white' }}>
          <Toolbar className="centered-text">
            <Typography variant="h4" className="app-title" style={{color:'black'}}> 
              Welcome Back {user.firstName} {user.lastName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* Image Carousel */}
              <div className="image-carousel">
          <button className="carousel-button" onClick={handlePreviousImage}>
            &lt; {/* Left arrow */}
          </button>
          <img
            src={carouselImages[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
          />
          <button className="carousel-button" onClick={handleNextImage}>
            &gt; {/* Right arrow */}
          </button>
        </div>
      </Grid>
            <Grid item xs={4}>
              {/* Container for Apply Loan */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6">Apply for Loan</Typography>
                  <p>
                    This is where you can apply for a new loan. Fill out the application
                    form and submit your request.
                  </p>
                  <Button
                    component={Link}
                    to="/apply-for-loan"
                    variant="contained"
                    style={{ backgroundColor: '#5a287d', color: 'white' }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              {/* Container for Loan History */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6">Loan History</Typography>
                  <p>
                    View your loan transaction history to keep track of your payments
                    and outstanding balances.
                  </p>
                  <Button
                    component={Link}
                    to="/loan-history" 
                    variant="contained"
                    style={{ backgroundColor: '#5a287d', color: 'white' }}
                  >
                    View History
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              {/* Container for Types of Loan */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6">Types of Loan</Typography>
                  <p>
                    Explore the different types of loans we offer. Find the one that
                    suits your needs.
                  </p>
                  <Button
                    onClick={handleOpenLoanTypesDialog}
                    variant="contained"
                    style={{
                      backgroundColor: '#5a287d',
                      color: 'white',
                      fontSize: '14px', 
                      padding: '5px 0',
                  }}
                  >
                    Explore
                  </Button>
                  <Dialog open={openLoanTypesDialog} onClose={handleCloseLoanTypesDialog}>
                          <DialogTitle>Loan Types</DialogTitle>
                          <DialogContent>
                            <LoanTypes />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseLoanTypesDialog}
                              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>Close</Button>
                          </DialogActions>
                        </Dialog>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
}


export default DashboardLayout;