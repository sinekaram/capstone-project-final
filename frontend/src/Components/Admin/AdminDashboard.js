import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ButtonGroup} from '@mui/material';
import LoanApplications from './LoanApplications';
import ApprovedApplications from './ApprovedApplications';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';



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
              style={{
                textTransform: 'capitalize',
                marginTop: '10px',
                fontSize: '15px',
                marginLeft: '100px',
                marginRight: '20px', // Add margin to separate buttons
                padding: '8px 16px', // Adjust padding as needed
                whiteSpace: 'nowrap',
              }}
            >
              Loan Applications
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={handleShowApprovedApplications}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
              style={{
                textTransform: 'capitalize',
                marginTop: '10px',
                fontSize: '15px',
                marginRight: '20px', // Add margin to separate buttons
                padding: '8px 16px', // Adjust padding as needed
              }}
            >
              Approved Loans
            </Button>
          </ButtonGroup>
          <div style={{ marginLeft: 'auto' }}>
              <Button
                component={Link}
                to="/"
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