import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import axios from 'axios';

function LoanApplications() {
  const [loanApplication, setLoanApplication] = useState([]);
  const [pendingLoanApplications, setPendingLoanApplications] = useState([]);
  const [expandedUserIds, setExpandedUserIds] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/loan_applications/admin")
      .then((response) => {
        setLoanApplication(response.data);
        const pendingApplications = response.data.filter(application => !application.approvalStatus);
        setPendingLoanApplications(pendingApplications);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = (id) => {
    // Send a request to update the approvalStatus to true for the specified application
    axios.put(`http://localhost:8080/loan_applications/admin/${id}`, { approvalStatus: true })
      .then((response) => {
        // Update the UI to reflect the change
        const updatedApplications = pendingLoanApplications.filter(application => application.id !== id);
        setPendingLoanApplications(updatedApplications);
      })
      .catch((error) => {
        console.error("Error accepting application:", error);
      });
  };

  const handleReject = (id) => {
    // Send a request to update the approvalStatus to false for the specified application
    axios.put(`http://localhost:8080/loan_applications/admin/${id}`, { approvalStatus: false })
      .then((response) => {
        // Update the UI to reflect the change
        const updatedApplications = pendingLoanApplications.filter(application => !application.approvalStatus);
        setPendingLoanApplications(updatedApplications);
      })
      .catch((error) => {
        console.error("Error rejecting application:", error);
      });
  };

  const toggleExpandedUser = (id) => {
    // Toggle the expanded user based on the current state
    setExpandedUserIds(prevIds => {
      if (prevIds.includes(id)) {
        // User is already expanded, so close it
        return prevIds.filter(prevId => prevId !== id);
      } else {
        // User is not expanded, so open it
        return [...prevIds, id];
      }
    });
  };

  return (
    <div>
      <h2 style={{ color: '#431c53', alignSelf: 'Center', marginLeft: '450px' }}>Loan Applications</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {pendingLoanApplications.map(application => (
          <div key={application.id} style={{ width: '30%', marginBottom: '20px' }}>
            <Card style={{ backgroundColor: '#FEDFE2' }}>
              <CardContent>
                <p><strong>Name:</strong> {application.firstName} {application.lastName}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
                {expandedUserIds.includes(application.id) ? (
                  <>
                    <Typography variant="h6">More Details</Typography>
                    <p><strong>Aadhaar Card:</strong> {application.aadhaarCard}</p>
                    <p><strong>Date of Birth:</strong> {application.dob}</p>
                    <p><strong>Phone Number:</strong> {application.mobileNumber}</p>
                    <p><strong>Monthly Income:</strong> {application.monthlyIncome}</p>
                    <p><strong>Type of Loan:</strong> {application.typeOfLoan}</p>
                    <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(application.id)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                      Close
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handleAccept(application.id)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                      Accept
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleReject(application.id)}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                      Reject
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(application.id)}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
                    More Info
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanApplications;