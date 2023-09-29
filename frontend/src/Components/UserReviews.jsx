import { Rating } from '@mui/material';
import React from 'react';

const Review = ({ userReview }) => {
  return (
    <div className="reviewCard">
      <div className="review">
        <div className="coverImage">
          <img src={userReview.book.coverImage} />
        </div>
        <div className="rating">
          <Rating value={userReview.rating}></Rating>
        </div>
      </div>
      <span>{userReview.book.title}</span>
    </div>
  );
};

const UserReviews = ({ reviews, message }) => {
  const renderReviews = () => {
    return reviews.map((review) => (
      <Review key={review._id} userReview={review} />
    ));
  };

  return (
    <div className="userReviews">
      {reviews !== undefined ? renderReviews() : message}
    </div>
  );
};

export default UserReviews;
