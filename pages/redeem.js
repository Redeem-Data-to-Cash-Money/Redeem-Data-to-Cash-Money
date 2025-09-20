import React, { useState, useEffect } from "react";
import DataList from "./DataList"; // Make sure this path is correct

export default function Redeem() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState([]);
  const commissionRate = 0.2; // 20% commission

  // Load user data from DataList
  useEffect(() => {
    setUserData(DataList()); // DataList should export an array of user balances
  }, []);

  const handleRedeem = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setMessage("Please enter a valid data amount to redeem.");
      return;
    }

    // Calculate total balance
    const userBalance = userData.reduce((total, user) => total + user.balance, 0);

    if (Number(amount) > userBalance) {
      setMessage("Insufficient data balance to redeem.");
      return;
    }

    // Calculate commission and user payout
    const commission = Number(amount) * commissionRate;
    const userPayout = Number(amount) - commission;

    setMessage(
      `Processing redeem of ${amount}MB/GB.\nYour payout: ${userPayout}MB/GB\nCommission: ${commission}MB/GB`
    );

    // TODO: Call API to handle actual redeem and Paystack payment
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redeem Your Data</h1>

      <h2>Your Data Balances</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.name}: {user.balance}MB/GB
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter data amount (MB or GB)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handleRedeem} style={{ padding: "8px 12px" }}>
        Redeem
      </button>

      {message && (
        <p style={{ marginTop: "10px", whiteSpace: "pre-line" }}>{message}</p>
      )}
    </div>
  );
}
