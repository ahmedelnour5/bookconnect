import React, { useState } from 'react';
import UserLists from '../Components/UserLists';
import Header from '../Components/Header/Header';

const Dashboard = () => {
  return (
    <div className="dashContainer">
      <UserLists />
    </div>
  );
};

export default Dashboard;
