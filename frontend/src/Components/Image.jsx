import React from 'react';

const Image = ({ src }) => {
  return (
    <div className="img-wrapper">
      <img src={src} />
    </div>
  );
};

export default Image;
