import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../css/LoanHistory.css';
import Header from "../Header/TopNavbar";
import Footer from "../Footer/Footer";

const API_URL = 'http://localhost:8080/api';

const LoanHistoryDetails = () => {
  const [loanHistory, setLoanHistory] = useState([]);
  
  useEffect(() => {
    axios.get(`${API_URL}/loan-history`)
      .then((response) => {
        setLoanHistory(response.data);
      })
      .catch((error) => {
        console.error('Error fetching loan history:', error);
      });
  }, []);

  return (
    <div>
      <Header/>
    <div className='loan-history-details'>
      <h2>Loan History Details</h2>
      <ul>
        {loanHistory.map((loan) => (
          <li>
            <p>First Name: {loan.firstName}</p>
            <p>Last Name: {loan.lastName}</p>
            <p>Date of Birth: {loan.dob}</p>
            <p>Aadhaar Card Number: {loan.aadhaarCard}</p>
            <p>Mobile Number: {loan.mobileNumber}</p>
            <p>Email: {loan.email}</p>
            <p>Monthly Income: {loan.monthlyIncome}</p>
            <p>Loan Amount: {loan.loanAmount}</p>
            <p>Type of Loan: {loan.typeOfLoan}</p>
            <p>Loan Term: {loan.loanTerm}</p>
            <p>Interest Rate Type: {loan.interestRateType}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default LoanHistoryDetails;
