import React from 'react';
import '../Styles/Features.css';
import Image from './Image';
import IMAGES from '../Images/Images';

const FeatureSections = () => {
  const Description = ({ header, text }) => {
    return (
      <div className="description">
        <h2 className="description-header">{header}</h2>
        <p className="description-text">{text}</p>
      </div>
    );
  };
  const Feature = ({ feature }) => {
    return (
      <section className="feature">
        <div className="feature-content">
          <Description header={feature.header} text={feature.text} />
          <Image src={feature.src} />
        </div>
      </section>
    );
  };
  const features = [
    {
      id: 1,
      header: 'Your Literary Journey Awaits',
      text: 'Explore a treasure trove of book recommendations carefully curated by influencers, friends, and fellow book lovers. Discover your next literary obsession in a space where every recommendation is a gem',
      src: IMAGES.journeyImg,
    },
    {
      id: 2,
      header: 'Fuel Your Reading Soul',
      text: 'Create and explore reading lists that reflect your literary aspirations and moods. Share your curated collections with the world, and find inspiration in others lists too.',
      src: IMAGES.listImg,
    },
    {
      id: 3,
      header: 'Discover, Connect, Inspire',
      text: 'Dive into a world tailored for book enthusiasts like you. BookConnect is more than an app; its a community that celebrates the magic of reading.',
      src: IMAGES.connectImg,
    },
    {
      id: 4,
      header: 'Feed Your Curiosity',
      text: 'Stay connected with your fellow readers through a dynamic activity feed. Witness the reading journeys of those you follow and join vibrant discussions about your favorite books.',
      src: IMAGES.feedImg,
    },
    {
      id: 5,
      header: 'Influence Through Words',
      text: 'Celebrate your love for books by influencing others with your recommendations. Become a source of inspiration as you share your literary treasures with a community that values your insights.',
      src: IMAGES.influenceImg,
    },
  ];

  const renderFeatures = () => {
    return features.map((feature) => (
      <Feature key={feature.id} feature={feature} />
    ));
  };
  return <div className="features">{renderFeatures()}</div>;
};

export default FeatureSections;
