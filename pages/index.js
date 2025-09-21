// pages/index.js
import React from 'react';
import SocialFollow from '../components/SocialFollow';
import RateStar from '../components/RateStar';
import Feedback from '../components/Feedback';

const Home = () => {
  return (
    <div className="home-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Redeem Data to Cash Money</h1>
      <p>Earn cash by redeeming your data easily!</p>

      <SocialFollow />
      <RateStar />
      <Feedback />
    </div>
  );
};

export default Home;
