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
import Axios from 'axios';

import LoanTypes from './LoanTypes';
import Footer from '../Footer/Footer';
import TopNavbar from '../Header/TopNavbar';
import '../css/dashboardlayout.css';

function PaymentCard({ paymentData }) {
  const handleMakePayment = () => {
    // Redirect to the '/payment' page when the button is clicked
    window.location.href = '/payment';
  };

  return (
    <Card className="payment-details-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body2">
            Total Loan Amount: {paymentData.totalAmount || 'N/A'}
          </Typography>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <Typography variant="body2">
            Paid Loan Amount: {paymentData.paidAmount || 'N/A'}
          </Typography>
        </div>
        <Typography variant="body2">
          Due Date: {paymentData.dueDate || 'N/A'}
        </Typography>
        <div style={{ marginTop: '180px' }}>
          <Button variant="contained" color="primary" onClick={handleMakePayment}>
            Make a Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardLayout({ id }) {
  const user = { id: id };
  const [paymentData, setPaymentData] = useState({});
  const [openTransactionHistoryDialog, setOpenTransactionHistoryDialog] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [openLoanTypesDialog, setOpenLoanTypesDialog] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:8082/users/${id}`)
      .then((response) => {
        const userData = response.data;
        // You can use userData if needed
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Fetch payment data and set it in paymentData state here
    Axios.get(`http://localhost:8080/loan-history`) // Replace with your API endpoint
      .then((response) => {
        setPaymentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });
  }, [id]);

  const handleOpenTransactionHistoryDialog = () => {
    // You should fetch and set transaction history data here
    // Axios.get(`/api/transaction-history/${id}`) // Replace with your API endpoint
    //   .then((response) => {
    //     setTransactionHistory(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching transaction history:', error);
    //   });

    setOpenTransactionHistoryDialog(true);
  };

  const handleCloseTransactionHistoryDialog = () => {
    setOpenTransactionHistoryDialog(false);
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
      <TopNavbar />
      <div className="dashboard-container">
        <AppBar position="static" className="app-bar">
          <Toolbar className="centered-text">
            <Typography variant="h4" className="app-title">
              Welcome Back {user.firstName} {user.lastName}
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Button
                component={Link}
                to="/home"
                variant="contained"
                style={{
                  backgroundColor: '#401664',
                  color: '#fff',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <Container className="container">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <PaymentCard paymentData={paymentData} />
            </Grid>
  
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card className="card">
                    <CardContent>
                      <Typography>
                        <Button
                          style={{
                            backgroundColor: '#401664',
                            color: '#fff',
                            padding: '14px 170px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                          }}
                          component={Link}
                          to="/apply-for-loan"
                          variant="contained"
                        >
                          Apply for New Loan
                        </Button>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card className="card">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Button onClick={handleOpenTransactionHistoryDialog} className="transaction-button">
                          Transaction History
                        </Button>
                        <Dialog open={openTransactionHistoryDialog} onClose={handleCloseTransactionHistoryDialog}>
                          <DialogTitle>Transaction History</DialogTitle>
                          <DialogContent>
                            {/* Render your transaction history data here */}
                            {transactionHistory.map((item) => (
                              <div key={item.id}>
                                {/* Render each transaction item */}
                              </div>
                            ))}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseTransactionHistoryDialog}>Close</Button>
                          </DialogActions>
                        </Dialog>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
  
                <Grid item xs={12}>
                  <Card className="card">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        <Button onClick={handleOpenLoanTypesDialog} className="transaction-button">
                          View Loan Types
                        </Button>
                        <Dialog open={openLoanTypesDialog} onClose={handleCloseLoanTypesDialog}>
                          <DialogTitle>Loan Types</DialogTitle>
                          <DialogContent>
                            <LoanTypes /> {/* Render the LoanTypes component here */}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseLoanTypesDialog}>Close</Button>
                          </DialogActions>
                        </Dialog>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
}

export default DashboardLayout;
