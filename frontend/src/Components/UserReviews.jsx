import { Rating } from '@mui/material';
import React from 'react';
import useReviews from '../Hooks/useReviews';

const Review = ({ userReview }) => {
  return (
    <div className="review">
      <div className="coverImage">
        <img src={userReview.coverImg} />
      </div>
      <div className="rating">
        <Rating value={userReview.rating}></Rating>
      </div>
    </div>
  );
};

const UserReviews = () => {
  const { reviews, message } = useReviews();

  return <div className="userReviews">reviews</div>;
};

export default UserReviews;
