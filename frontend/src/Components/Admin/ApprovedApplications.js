import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import '../css/LoanApplications.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


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
      <h2 className="header">Approved Applications</h2>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>S.No</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Name</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Email</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Amount</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Monthly Income</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Type</TableCell>
              {/* <TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {acceptedLoanApplications.map((application, index) => (
              <TableRow key={application.id} className="table-row">
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {index + 1}
                </TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {application.firstName} {application.lastName}
                </TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.email}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.loanAmount}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.monthlyIncome}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.typeOfLoan}</TableCell>
                {/* <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => toggleExpandedUser(application.id)}
                    style={{ backgroundColor: '#572780' }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
                  >
                    {expandedUserId === application.id ? "Close" : "More Info"}
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {expandedUserId !== null && (
        <Card style={{ marginBottom: '10px', backgroundColor: '#FEDFE2' }}>
          <CardContent>
            <Typography variant="h6">More Details</Typography>
            {acceptedLoanApplications
              .filter(application => application.id === expandedUserId)
              .map(application => (
                <div key={application.id}>
                  <p><strong>Aadhaar Card:</strong> {application.aadhaarCard}</p>
                  <p><strong>Date of Birth:</strong> {application.dob}</p>
                  <p><strong>Phone Number:</strong> {application.mobileNumber}</p>
                  <p><strong>Monthly Income:</strong> {application.monthlyIncome}</p>
                  <p><strong>Type of Loan:</strong> {application.typeOfLoan}</p>
                </div>
              ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() => toggleExpandedUser(null)}
              style={{ backgroundColor: '#572780' }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      )} */}
    </div>
  );
}

export default ApprovedApplications;
