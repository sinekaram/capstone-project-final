import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ButtonGroup } from '@mui/material';
import LoanApplications from './LoanApplications';
import ApprovedApplications from './ApprovedApplications';

function AdminDashboard() {
  const [showApprovedApplications, setShowApprovedApplications] = useState(false);

  const handleShowLoanApplications = () => {
    setShowApprovedApplications(false);
  };

  const handleShowApprovedApplications = () => {
    setShowApprovedApplications(true);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#572780' }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft:'50px', fontSize:'25px' }}>
          
            Admin Dashboard
          </Typography>
          <ButtonGroup>
            <Button
              variant="text"
              color="inherit"
              onClick={handleShowLoanApplications}
              style={{ textTransform: 'capitalize',marginLeft:'100px', marginTop:'10px', fontSize:'18px'  }} // Change textTransform to 'capitalize'
            >
              Loan Applications
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={handleShowApprovedApplications}
              style={{ textTransform: 'capitalize', marginLeft:'50px', marginTop:'10px',fontSize:'18px'}} // Change textTransform to 'capitalize'
            >
              Approved Loans
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Container>
        {showApprovedApplications ? (
          <ApprovedApplications />
        ) : (
          <LoanApplications />
        )}
      </Container>
    </div>
  );
}

export default AdminDashboard;