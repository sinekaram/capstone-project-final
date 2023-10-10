import React from 'react';
import { Typography, Card, CardContent, Button, Grid, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';

function LoanTypes() {
  const loanTypes = [
    {
      name: 'Personal Loan',
      interestRate: 'Low interest rate: 5%',
    },
    {
      name: 'Home Loan',
      interestRate: 'Lowest interest rate: 3.5%',
    },
    {
      name: 'Car Loan',
      interestRate: 'Competitive interest rate: 4%',
    },
    {
      name: 'Student Loan',
      interestRate: 'Education-focused loan: 3%',
    },
    {
      name: ' Business Loan',
      interestRate: 'Support for entrepreneurs: 4.5%',
    },
   
  ];

  return (
    
    
    <div>
      <Grid container spacing={3}>
        {loanTypes.map((loan, index) => (
          <Grid item key={index} xs={20} sm={6} md={4}>
            <Fade in={true} timeout={500 * (index + 1)}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{loan.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {loan.interestRate}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {loan.term}
                  </Typography>
                </CardContent>
                
                <Link to="/apply-for-loan">
                <Button variant="contained" style={{ backgroundColor: '#401664' }}>
                    Apply for {loan.name}
                  </Button>
                </Link>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
    
  );
}

export default LoanTypes;
