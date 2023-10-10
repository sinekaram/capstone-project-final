import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ButtonGroup } from '@mui/material';
import LoanApplications from './LoanApplications';
import ApprovedApplications from './ApprovedApplications';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [showApprovedApplications, setShowApprovedApplications] = useState(false);

  const handleShowLoanApplications = () => {
    setShowApprovedApplications(false);
  };

  const navigate = useNavigate();

  const handleShowApprovedApplications = () => {
    setShowApprovedApplications(true);
  };

  const handleLogout = () => {
    // Clear session storage when the "Logout" button is clicked
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#572780' }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: '50px', fontSize: '25px' }}>

            Admin Dashboard
          </Typography>
          
          <ButtonGroup>
            <Button
              variant="text"
              color="inherit"
              onClick={handleShowLoanApplications}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
              style={{ textTransform: 'capitalize', marginLeft: '50px', marginTop: '10px', fontSize: '18px'}} // Change textTransform to 'capitalize'
            >
              Loan Applications
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={handleShowApprovedApplications}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
              style={{ textTransform: 'capitalize', marginLeft: '50px', marginTop: '10px', fontSize: '18px' }} // Change textTransform to 'capitalize'
            >
              Approved Loans
            </Button>

            <Button
              variant="text"
              color="inherit"
              onClick={handleLogout}
              style={{ textTransform: 'capitalize', marginLeft: '50px', marginTop: '10px', fontSize: '18px' }}
            >
              Logout
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
      <Footer />
    </div>
  );
}

export default AdminDashboard;