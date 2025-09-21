import React, { useState } from 'react';

const AdminDashboard = () => {
  const [vendorID, setVendorID] = useState('');
  const [redeemRequests, setRedeemRequests] = useState([]);

  const handleVendorID = () => {
    console.log(`Vendor ID set: ${vendorID}`);
  };
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h3>Vendor Setup</h3>
        <input
          type="text"
          placeholder="Enter Vendor ID / API"
          value={vendorID}
          onChange={(e) => setVendorID(e.target.value)}
        />
        <button onClick={handleVendorID}>Save Vendor</button>
      </div>

      <div>
        <h3>Redeem Requests</h3>
        {redeemRequests.length === 0 ? (
          <p>No redeem requests yet</p>
        ) : (
          <ul>
            {redeemRequests.map((req, index) => (
              <li key={index}>
                {req.user} wants to redeem {req.amount} {req.unit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
