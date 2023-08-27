import React, { useState } from 'react';
import UserLists from '../Components/UserLists';
import Header from '../Components/Header/Header';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header />
      <div className="dashContainer">
        <UserLists />
      </div>
    </div>
  );
};

export default Dashboard;
