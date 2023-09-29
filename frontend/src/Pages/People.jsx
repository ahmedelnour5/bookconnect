import { CircularProgress } from '@mui/material';
import React from 'react';

const Tags = ({ tags }) => {
  return <div className="tags">{tags}</div>;
};
const InfluencerPhoto = ({ image }) => {
  return (
    <div className="influencerPhotoWrap">
      <img className="influencerPhoto" src={image} />
    </div>
  );
};
const Influencer = ({ person }) => {
  return (
    <div className="influencer">
      <InfluencerPhoto image={person.image} />
      <span className="influencerName">{person.name}</span>
      <Tags tags={person.tags} />
    </div>
  );
};

const RenderInfluencers = (influencers) => {
  return influencers && influencers.length > 0 ? (
    influencers.map((influencer) => {
      <Influencer key={influencer._id} person={influencer} />;
    })
  ) : (
    <CircularProgress />
  );
};

const People = () => {
  const API_URL = 'http://localhost:8080/api/influencers';

  return <div className="peopleGrid"></div>;
};

export default People;
