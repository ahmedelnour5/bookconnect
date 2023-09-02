import React from 'react';
import UserLists from '../Components/UserLists';
import Header from '../Components/Header/Header';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashContainer">
        <UserLists />
      </div>
    </>
  );
};

export default Dashboard;
