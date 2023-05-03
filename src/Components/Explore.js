import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import '../styles/Explore.css';
import Category from './Category';
import PeopleIcon from '@mui/icons-material/People';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ScienceIcon from '@mui/icons-material/Science';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeIcon from '@mui/icons-material/Code';

function Explore() {
  return (
    <section className="exploreSection">
      <div className="gridContainer">
        <div className="catHeadContainer">
          <h2 className="categoryHead">Explore all books by catgeory</h2>
        </div>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid xs={5}>
            <Category Icon={PeopleIcon} title="Biogrophies & Memiors" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={DesignServicesIcon} title="Design" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={MonitorHeartIcon} title="Health & Fitness" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={ScienceIcon} title="Science & Nature" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={AnalyticsIcon} title="Business & Management" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={AutoFixHighIcon} title="Fiction" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={LibraryBooksIcon} title="Non-Fiction" />
          </Grid>
          <Grid xs={5}>
            <Category Icon={CodeIcon} title="Technology" />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Explore;
