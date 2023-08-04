import React from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleIcon from '@mui/icons-material/People';
import DesignServicesIcon from '@mui/icons-material/Design';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ScienceIcon from '@mui/icons-material/Science';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';

const Category = ({ Icon, title }) => {
  return (
    <div className="category-wrapper">
      <Icon />
      <h3 className="category-title">{title}</h3>
    </div>
  );
};


const BooksNav = () => {
  return (
    <div className="booksNav">
      <Category Icon={LocalLibraryIcon} title="All Books" />
      <Category Icon={AnalyticsIcon} title="Business Management" />
      <Category Icon={PeopleIcon} title="Biographies and Memoirs" />
      <Category Icon={DesignServicesIcon} title="Design" />
      <Category Icon={AccountBalanceIcon} title="Economics and Politics" />
      <Category Icon={AutoFixHighIcon} title="Fiction" />
      <Category Icon={MonitorHeartIcon} title="Health and Fitness" />
      <Category Icon={ShowChartIcon} title="Money and Investing" />
      <Category Icon={LibraryBooksIcon} title="Non-Fiction" />
      <Category Icon={PsychologyIcon} title="Psychology" />
      <Category Icon={LocalFloristIcon} title="Poetry" />
      <Category Icon={ScienceIcon} title="Science and Nature" />
      <Category Icon={TrendingUpIcon} title="Self-Improvement" />
      <Category Icon={CodeIcon} title="Technology" />
    </div>
  );
};

export default BooksNav;
