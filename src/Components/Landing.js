import React from 'react';
import '../styles/landing.css';
import Header from './Header';

function Landing() {
  return (
    <div className="Landing">
      <Header />
      <section className="Main">
        <div className="heroText">
          <h1 className="landingHeader">Readfluence </h1>
          <span className="landingTxt">
            discover what the most influential people <br></br> in the world are
            reading.
          </span>
        </div>
      </section>
    </div>
  );
}

export default Landing;
