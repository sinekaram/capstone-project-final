import React from 'react'
import paymentsuccesspopup from '../css/paymentsuccesspopup.css';
const PaymentSuccessPopup = ({onClose}) => {
  return (
    <div className="payment-success-popup">
      <h2>Payment Successful!</h2>
      <p>Your payment has been successfully processed.</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default PaymentSuccessPopup