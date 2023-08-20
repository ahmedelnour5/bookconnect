import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleIcon from '@mui/icons-material/People';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
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
import '../../Styles/Books.css';

const Category = ({ Icon, title, to, active }) => {
  return (
    <div className={`category-wrapper ${active && 'category-wrapper--active'}`}>
      <Icon />
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        <h3 className="category-title">{title}</h3>
      </NavLink>
    </div>
  );
};

const BooksNav = () => {
  const location = useLocation();

  //encode URIs
  const businessEncoded = encodeURIComponent('Business Management');
  const bioEncoded = encodeURIComponent('Biographies and Memoirs');
  const econEncoded = encodeURIComponent('Economics and Politics');
  const healthEncoded = encodeURIComponent('Health and Fitness');
  const moneyEncoded = encodeURIComponent('Money and Investing');
  const sciEncoded = encodeURIComponent('Science and Nature');

  return (
    <div className="booksNav">
      <Category
        Icon={LocalLibraryIcon}
        title="All Books"
        to={'/books'}
        active={location.pathname === '/books'}
      />
      <Category
        Icon={AnalyticsIcon}
        title="Business Management"
        to={`/categories/${businessEncoded}`}
        active={location.pathname === `/categories/${businessEncoded}`}
      />
      <Category
        Icon={PeopleIcon}
        title="Biographies and Memoirs"
        to={`/categories/${bioEncoded}`}
        active={location.pathname === `/categories/${bioEncoded}`}
      />
      <Category
        Icon={DesignServicesIcon}
        title="Design"
        to={'/categories/Design'}
        active={location.pathname === '/categories/Design'}
      />
      <Category
        Icon={AccountBalanceIcon}
        title="Economics and Politics"
        to={`/categories/${econEncoded}`}
        active={location.pathname === `/categories/${econEncoded}`}
      />
      <Category
        Icon={AutoFixHighIcon}
        title="Fiction"
        to={'/categories/Fiction'}
        active={location.pathname === '/categories/Fiction'}
      />
      <Category
        Icon={MonitorHeartIcon}
        title="Health and Fitness"
        to={`/categories/${healthEncoded}`}
        active={location.pathname === `/categories/${healthEncoded}`}
      />
      <Category
        Icon={ShowChartIcon}
        title="Money and Investing"
        to={`/categories/${moneyEncoded}`}
        active={location.pathname === `/categories/${moneyEncoded}`}
      />
      <Category
        Icon={LibraryBooksIcon}
        title="Non-Fiction"
        to={'/categories/Non-Fiction'}
        active={location.pathname === '/categories/Non-Fiction'}
      />
      <Category
        Icon={PsychologyIcon}
        title="Psychology"
        to={'/categories/Psychology'}
        active={location.pathname === '/categories/Psychology'}
      />
      <Category
        Icon={LocalFloristIcon}
        title="Poetry"
        to={'/categories/Poetry'}
        active={location.pathname === '/categories/Poetry'}
      />
      <Category
        Icon={ScienceIcon}
        title="Science and Nature"
        to={`/categories/${sciEncoded}`}
        active={location.pathname === `/categories/${sciEncoded}`}
      />
      <Category
        Icon={TrendingUpIcon}
        title="Self-Improvement"
        to={`/categories/Self-Improvement`}
        active={location.pathname === '/categories/Self-Improvement'}
      />
      <Category
        Icon={CodeIcon}
        title="Technology"
        to={'/categories/Technology'}
        active={location.pathname === '/categories/Technology'}
      />
    </div>
  );
};

export default BooksNav;
