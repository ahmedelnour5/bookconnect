import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import '../../Styles/Review.css';

const Review = ({ handleFinished }) => {
  const [userThoughts, setUserThoughts] = useState('');
  const [userRating, setUserRating] = useState(0);

  const buttonStyle = {
    bgcolor: '#5217fc',
    fontFamily: 'inherit',
    borderRadius: 1,
  };

  const handleThoughtsChange = (e) => {
    setUserThoughts(e.target.value);
  };

  const handleRatingChange = (e, newValue) => {
    console.log(newValue);
    setUserRating(newValue);
  };

  return (
    <>
      <textarea
        type="text"
        id="thoughts"
        placeholder="Thoughts"
        value={userThoughts}
        name="thoughts"
        onChange={handleThoughtsChange}
        maxLength={160}
      ></textarea>
      <Rating value={userRating} size="large" onChange={handleRatingChange} />
      <Button
        variant="contained"
        sx={buttonStyle}
        size="large"
        type="submit"
        onClick={() => handleFinished(userThoughts, userRating)}
      >
        Continue
      </Button>
    </>
  );
};

export default Review;
