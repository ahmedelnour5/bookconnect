import React from 'react';
import Header from '../Components/Header';
import '../Styles/Landing.css';
import IMAGES from '../Images/Images';

const Main = () => {
  const Image = ({ src }) => {
    return (
      <div className="img-wrapper">
        <img src={src} />
      </div>
    );
  };

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
        <Image src={IMAGES.bookImg} />
        <Text />
      </div>
    </main>
  );
};

const Landing = () => {
  return (
    <div className="Landing">
      <Header />
      <Main />
    </div>
  );
};

export default Landing;
