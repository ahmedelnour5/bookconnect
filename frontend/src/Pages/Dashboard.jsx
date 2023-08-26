import React, { useState } from 'react';
import UserLists from '../Components/UserLists';
import UserHeader from '../Components/Header/userHeader';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <UserHeader />
      <div className="dashContainer">
        <UserLists />
      </div>
    </div>
  );
};

export default Dashboard;
