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
import Footer from "../Footer/Footer";
import TopNavbar from '../Header/TopNavbar';
import '../css/dashboardlayout.css'

function DashboardLayout() {
  const [paymentData, setPaymentData] = useState({});
  const [openTransactionHistoryDialog, setOpenTransactionHistoryDialog] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [openLoanTypesDialog, setOpenLoanTypesDialog] = useState(false);

  useEffect(() => {
    // Fetch payment data and set it in paymentData state here
    Axios.get('/api/payment-details') // Replace with your API endpoint for payment details
      .then((response) => {
        setPaymentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });
  }, []);

  const handleOpenTransactionHistoryDialog = () => {
    // Fetch transaction history data and set it in transactionHistory state here
    Axios.get('/api/transaction-history') // Replace with your API endpoint for transaction history
      .then((response) => {
        setTransactionHistory(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transaction history:', error);
      });

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

  return (
    <Fragment>
      <TopNavbar />
      <div className="dashboard-container">
        <AppBar position="static" className="app-bar">
          <Toolbar className="centered-text">
            <Typography variant="h4" className="app-title">
              Welcome Back Customer
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
              <Card className="payment-details-card">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Payment Details
                  </Typography>
                  <Typography variant="body2">
                    Account Balance: {paymentData.balance || 'N/A'}
                    <br />
                    Due Date: {paymentData.dueDate || 'N/A'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card className="card" >
                    <CardContent>
                      <Typography  >
                        <Button
                         style={{backgroundColor: '#401664',color: '#fff',padding: '14px 170px',cursor: 'pointer',transition: 'background-color 0.3s'
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
