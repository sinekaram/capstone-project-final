import React, { useState } from 'react';
import '../css/LoanApplicationForm.css'
import axios from 'axios';
import Footer from "../Footer/Footer";
import Header from "../Header/TopNavbar";

const API_URL = 'http://localhost:8080/api';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Define your form fieldsac here
    firstName: '',
    lastName: '',
    dob: '', 
    aadhaarCard: '',
    mobileNumber: '',
    email: '',
    monthlyIncome: '',  
    loanAmount: '',
    typeOfLoan: 'personalLoan',
    loanTerm: '',
    interestRateType: 'fixed',
    
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API for processing
      const response = await axios.post(`${API_URL}/apply-for-loan`, formData);

      // Handle the response, e.g., display a success message
      console.log('Loan application submitted successfully', response.data);

      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        aadhaarCard: '',
        mobileNumber: '',
        email: '',
        monthlyIncome: '',
        loanAmount: '',
        typeOfLoan: 'personalLoan',
        loanTerm: '',
        interestRateType: 'fixed',
      });
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error submitting loan application', error);
    }
  };

  return (
    <div>
      <Header/>
    <div className="loan-application-form">
      <h2>Apply for Loan</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='dob'>Date of Birth</label>
            <input type='date' id='dob' name='dob' value={formData.dob} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='aadhaarCard'>Aadhaar Card Number</label>
            <input type='text' id='aadhaarCard' name='aadhaarCard' value={formData.aadhaarCard} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='mobileNumber'>Mobile Number</label>
            <input type='tel' id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='email'>Email Id</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='monthlyIncome'>Monthly Income</label>
            <input type='number' id='monthlyIncome' name='monthlyIncome' value={formData.monthlyIncome} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='loanAmount'>Loan Amount</label>
            <input type='number' id='loanAmount' name='loanAmount' value={formData.loanAmount} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='loanTerm'>Loan Term</label>
            <input type='number' id='loanTerm' name='loanTerm' value={formData.loanTerm} onChange={handleInputChange} required/>
        </div>

        <div className="form-group">
            <label htmlFor='typeOfLoan'>Type of Loan</label>
            <select id='typeOfLoan' name='typeOfLoan' value={formData.typeOfLoan} onChange={handleInputChange} required>
                <option value="personalLoan">Personal Loan</option>
                <option value="homeLoan">Home Loan</option>
                <option value="autoLoan">Auto Loan</option>
                <option value="studentLoan">Student Loan</option>
                <option value="businessLoan">Business Loan</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor='interestRateType'>Interest Rate Type</label>
            <select id='interestRateType' name='interestRateType' value={formData.interestRateType} onChange={handleInputChange} required>
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>
            </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default LoanApplicationForm;
