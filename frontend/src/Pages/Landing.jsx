import React from 'react';
import Header from '../Components/Header';
import '../Styles/Landing.css';

const Main = () => {
  return (
    <section className="Main container">
      <div className="">
        <p>The Next Gen social media for book lovers.</p>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <div className="Container">
      <Header />
      <Main />
    </div>
  );
};

export default Landing;
