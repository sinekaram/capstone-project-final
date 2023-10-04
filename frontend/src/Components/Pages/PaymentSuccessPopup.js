import React from 'react'
import paymentsuccesspopup from './paymentsuccesspopup.css';
const PaymentSuccessPopup = ({ referenceNumber, onClose}) => {
  return (
    <div className="payment-success-popup">
      <h2>Payment Successful!</h2>
      <p>Your payment has been successfully processed.</p>
      <p>Reference Number: {referenceNumber}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default PaymentSuccessPopup