import React from 'react';
import Paper from '@mui/material/Paper';

function Category({ Icon, title }) {
  return (
    <Paper
      elevation={6}
      style={{
        height: 90,
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
      className="catCard"
    >
      <Icon style={{ marginLeft: '8px' }} />
      <h4 style={{ marginLeft: '8px' }}>{title}</h4>
    </Paper>
  );
}

export default Category;
