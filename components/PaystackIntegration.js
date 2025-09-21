import React from 'react';

const PaystackIntegration = ({ email, amount, onSuccess }) => {
  const handlePayment = () => {
    // Replace with real Paystack integration
    console.log(`Processing payment for ${email} - ${amount} Naira`);
    // Simulate auto split: 80% users, 40% you
    const userAmount = amount * 0.8;
    const commission = amount * 0.4; // includes extra 200
    console.log(`User gets: ${userAmount}, Commission: ${commission}`);
    onSuccess({ userAmount, commission });
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default PaystackIntegration;
