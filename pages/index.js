import React from 'react';
import DataList from '../components/DataList';
import RedeemForm from '../components/RedeemForm';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Redeem Data to Cash</h1>
      <DataList />
      <RedeemForm />
    </div>
  );
}
