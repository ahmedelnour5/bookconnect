import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import FeatureSections from '../Components/FeatureSections';
import IMAGES from '../Images/Images';
import Image from '../Components/Image';
import '../Styles/Landing.css';
import { UserContext } from '../Context/UserContext';

const Main = () => {
  const Text = () => {
    return (
      <div className="copy">
        <h1 className="copy-header">Welcome to BookConnect!</h1>
        <p className="copy-text">
          Discover, Connect, and Immerse Yourself in the World of Books.
        </p>
      </div>
    );
  };

  return (
    <main className="main-container">
      <div className="content">
        <Image src={IMAGES.peopleImg} />
        <Text />
      </div>
      <FeatureSections />
    </main>
  );
};

const Landing = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user !== 'null') {
      navigate('/dashboard');
    }
  }, [user]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Landing;
