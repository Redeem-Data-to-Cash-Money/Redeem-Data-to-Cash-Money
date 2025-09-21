// pages/admin.js
import React, { useState } from "react";

export default function AdminDashboard() {
  const [paystackKey, setPaystackKey] = useState("");
  const [otopayVendorID, setOtopayVendorID] = useState("");

  const handleConnectPaystack = () => {
    if (!paystackKey) {
      alert("Please enter Paystack Secret Key");
      return;
    }
    console.log("Paystack connected with key:", paystackKey);
    alert("Paystack connected successfully!");
  };

  const handleConnectOtopay = () => {
    if (!otopayVendorID) {
      alert("Please enter Otopay Vendor ID");
      return;
    }
    console.log("Otopay connected with vendor ID:", otopayVendorID);
    alert("Otopay connected successfully!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ marginTop: "30px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Connect Payment Services</h2>
        <div style={{ marginBottom: "15px" }}>
          <label>Paystack Secret Key:</label><br />
          <input
            type="text"
            value={paystackKey}
            onChange={(e) => setPaystackKey(e.target.value)}
            placeholder="Enter Paystack Secret Key"
            style={{ padding: "5px", width: "250px" }}
          />
          <button onClick={handleConnectPaystack} style={{ marginLeft: "10px", padding: "5px 10px" }}>
            Connect Paystack
          </button>
        </div>

        <div>
          <label>Otopay Vendor ID:</label><br />
          <input
            type="text"
            value={otopayVendorID}
            onChange={(e) => setOtopayVendorID(e.target.value)}
            placeholder="Enter Otopay Vendor ID"
            style={{ padding: "5px", width: "250px" }}
          />
          <button onClick={handleConnectOtopay} style={{ marginLeft: "10px", padding: "5px 10px" }}>
            Connect Otopay
          </button>
        </div>
      </div>

      <div style={{ marginTop: "30px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Users & Redeems</h2>
        <p>Here you will see all users, data redeem history, and commissions once the app is live.</p>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Commission & Payouts</h2>
        <p>All user payouts and your 40% commission will be tracked automatically here after Paystack is connected.</p>
      </div>
    </div>
  );
    }
