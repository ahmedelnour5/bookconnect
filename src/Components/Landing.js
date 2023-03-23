import React from 'react';
import bookCase from './bookCase.jpg';
import '../styles/landing.css';
import Header from './Header';

function Landing() {
  return (
    <div className="Landing">
      <Header />
      <section className="Main">
        <div className="heroText">
          <h1>Readfluence - </h1>
          <span>
            discover what the most influential people in the world are reading
          </span>
        </div>
        <div className="heroWrapper">
          <img src={bookCase}></img>
        </div>
      </section>
    </div>
  );
}

export default Landing;
