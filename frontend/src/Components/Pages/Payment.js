import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import TopNavbar from '../Header/TopNavbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PaymentSuccessPopup from './PaymentSuccessPopup';
import paymentsuccesspopup from '../css/paymentsuccesspopup.css';
import '../css/payment.css';
import axios from 'axios';

const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentOption, setPaymentOption] = useState('full');
  const [maskedCVV, setMaskedCVV] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('personal');


  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };
  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
  };
  const handleCVVChange = (e) => {
    const cvvValue = e.target.value;
    setCVV(cvvValue); // Update the actual CVV

    // Create a masked CVV with asterisks
    const maskedValue = '*'.repeat(cvvValue.length);
    setMaskedCVV(maskedValue); // Update the masked CVV
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };
  useEffect(() => {
    const fetchLoanAmount = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/loan/19bcs2464@gmail.com');
        setLoanAmount(response.data.loanAmount);
      } catch (error) {
        console.error('Error fetching loan amount', error);
      }
    };

    fetchLoanAmount();
  }, []);
  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
    // Set payment amount based on the selected option
    if (selectedOption === 'full') {
      setPaymentAmount(loanAmount); // Full balance amount
    } else if (selectedOption === 'partial') {
      setPaymentAmount('1000'); // Monthly loan amount
    }
  };

  // useEffect to initialize the payment amount when the component mounts
  useEffect(() => {
    // Set the initial payment amount based on the default payment option ('full' or 'partial')
    if (paymentOption === 'full') {
      setPaymentAmount(loanAmount); // Full balance amount
    } else if (paymentOption === 'partial') {
      setPaymentAmount('1000'); // Monthly loan amount
    }
  }, [paymentOption]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform payment processing here (e.g., validation, API call)
    // Create a paymentInfo object with the payment details
    const paymentInfo = {
      paymentAmount,
      paymentMethod,
      cardNumber,
      nameOnCard,
      expirationMonth,
      expirationYear,
      cvv,
      bankAccount,
      accountHolderName,
      ifscCode,
      referenceNumber,
      paymentDate,
      upiId,
      loanType
    };

    try {
      // Send a POST request to your backend endpoint
      const response = axios.post('http://localhost:8082/banking/payment', paymentInfo);

      console.log("referenceNumber:", response.data);

      console.log('Payment successful', response.data);
      setShowSuccessPopup(true);

      setPaymentAmount('1000');
      setPaymentMethod('creditCard');
      setCardNumber('');
      setNameOnCard('');
      setExpirationMonth('');
      setExpirationYear('');
      setCVV('');
      setBankAccount('');
      setAccountHolderName('');
      setIfscCode('');
      setUpiId('');
    } catch (error) {
      console.error('Error making payment', error);
    }
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'border-color 0.3s ease-in-out',
  };

  const handleInputHover = (e) => {
    e.target.style.borderColor = '#5a287d';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#ccc';
  };
  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };

  const handleAccountHolderNameChange = (e) => {
    setAccountHolderName(e.target.value);
  };

  const handleIfscCodeChange = (e) => {
    setIfscCode(e.target.value);
  };
  // Generate an array of years starting from the current year up to 10 years in the future
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);

  return (
    <Fragment>
      <TopNavbar />
      <Container fluid className="payment-container">
        <h1 className="payment-heading">Loan Payment</h1>
        <div>
          <p className="payment-info">Total Loan Amount: ${loanAmount}</p>
          <p className="payment-info">Due Date: 2023-12-31</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="payment-label">Loan Type</Form.Label>
            <Form.Control
              as="select"
              value={loanType}
              onChange={handleLoanTypeChange}
              className="payment-select"
            >
              <option value="personal">Personal Loan</option>
              <option value="home">Home Loan</option>
              <option value="student">Student Loan</option>
              <option value="auto">Auto Loan</option>
              <option value="business">Business Loan</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Option</Form.Label>
            <Form.Control
              as="select"
              value={paymentOption}
              onChange={handlePaymentOptionChange}
              className="payment-select"
              disabled={showSuccessPopup}
            >
              <option value="full">Full Amount</option>
              <option value="partial">Monthly Amount</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Amount</Form.Label>
            <Form.Control
              type="number"
              value={paymentAmount}
              onChange={handlePaymentAmountChange}
              required
              className="payment-input"
              disabled={paymentOption === 'full' || showSuccessPopup}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Method</Form.Label>
            <Form.Control
              as="select"
              onChange={handlePaymentMethodChange}
              className="payment-select"
            >
              <option value="creditCard">Credit/Debit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="upi">UPI</option>
            </Form.Control>
          </Form.Group>
          {paymentMethod === 'creditCard' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">Card Number</Form.Label>
                <Form.Control
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  required
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">CVV</Form.Label>
                <Form.Control
                  type="text"
                  value={maskedCVV}
                  onChange={handleCVVChange}
                  required
                  pattern="^.{3}$" // Use pattern attribute to enforce 3 digits
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
                <small className="text-muted">Enter a 3-digit CVV number.</small>
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Expiration Date</Form.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Form.Control
                    as="select"
                    value={expirationMonth}
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    required
                    style={{ ...inputStyles, flex: 1, marginRight: '5px' }}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control
                    as="select"
                    value={expirationYear}
                    onChange={(e) => setExpirationYear(e.target.value)}
                    required
                    style={{ ...inputStyles, flex: 1 }}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>

            </Fragment>
          )}
          {paymentMethod === 'bankTransfer' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">Account Number</Form.Label>
                <Form.Control
                  type="text"
                  value={bankAccount}
                  onChange={handleBankAccountChange}
                  required
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Account Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  value={accountHolderName}
                  onChange={handleAccountHolderNameChange}
                  required
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  value={ifscCode}
                  onChange={handleIfscCodeChange}
                  required
                  className="payment-input"
                />
              </Form.Group>
            </Fragment>
          )}
          {paymentMethod === 'upi' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  required
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
            </Fragment>
          )}
          <div>
            <Button type="submit" className="payment-button">
              Submit Payment
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
      {showSuccessPopup && (
        <PaymentSuccessPopup
          referenceNumber={referenceNumber}
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </Fragment>
  );
};

export default Payment;
