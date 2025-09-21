import React, { useState } from 'react';

const RedeemForm = ({ onRedeem }) => {
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('MB');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return alert('Enter data amount');
    onRedeem({ amount: parseFloat(amount), unit });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Redeem Data</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="MB">MB</option>
        <option value="GB">GB</option>
      </select>
      <button type="submit">Redeem</button>
    </form>
  );
};

export default RedeemForm;
