import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material'; // Import Grid
import axios from 'axios';

function ApprovedApplications() {
  const [acceptedLoanApplications, setAcceptedLoanApplications] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  const fetchData = () => {
    axios.get("http://localhost:8080/loan_applications/admin")
      .then((response) => {
        const Applications = response.data.filter(application => application.approvalStatus);
        setAcceptedLoanApplications(Applications);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleExpandedUser = (id) => {
    setExpandedUserId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2>Approved Applications</h2>
      <Grid container spacing={2}> {/* Use Grid to create a grid layout */}
        {acceptedLoanApplications.map(application => (
          <Grid item xs={12} sm={6} key={application.id}> {/* Each card takes half the width on small screens */}
            <Card style={{ marginBottom: '10px',backgroundColor:'#f0f0f0' }}>
              <CardContent>
                <p><strong>Name:</strong> {application.firstName} {application.lastName}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
                {expandedUserId === application.id ? (
                  <>
                    <Typography variant="h6">More Details</Typography>
                    <p><strong>Aadhaar Card:</strong> {application.aadhaarCard}</p>
                    <p><strong>Date of Birth:</strong> {application.dob}</p>
                    <p><strong>Phone Number:</strong> {application.mobileNumber}</p>
                    <p><strong>Monthly Income:</strong> {application.monthlyIncome}</p>
                    <p><strong>Type of Loan:</strong> {application.typeOfLoan}</p>
                    <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(null)}  
                                    style={{ backgroundColor: '#572780' }}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                                     
                      Close
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(application.id)}
                  style={{ backgroundColor: '#572780' }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                    
                    More Info
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ApprovedApplications;