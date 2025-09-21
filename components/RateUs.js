import FollowUs from '../components/FollowUs';
import RateStar from '../components/RateStar';
import Feedback from '../components/Feedback';


import React, { useState } from 'react';

const RateUs = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rate-us">
      <h3>Rate Us</h3>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray', fontSize: '24px' }}
        >
          ★
        </span>
      ))}
      <p>Your rating: {rating} star{rating > 1 ? 's' : ''}</p>
    </div>
  );
};

export default RateUs;
