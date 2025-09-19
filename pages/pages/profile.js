import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '08012345678',
    dataBalanceGB: 5, // Example data balance
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Data Balance: {userData.dataBalanceGB} GB</p>

      <div style={{ marginTop: '20px' }}>
        <Link href="/RedeemForm">
          <button style={{ padding: '10px 20px' }}>Redeem Data</button>
        </Link>
        <button style={{ padding: '10px 20px', marginLeft: '10px' }} onClick={() => alert('Logged out!')}>
          Logout
        </button>
      </div>
    </div>
  );
}
