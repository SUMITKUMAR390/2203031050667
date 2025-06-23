import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';

const StatsPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortenedUrls') || '[]');
    setEntries(stored);
  }, []);

  return (
    <>
      <Typography variant="h5">Statistics</Typography>
      {entries.map((e, i) => (
        <Paper key={i} style={{ margin: 10, padding: 10 }}>
          <p>Original URL: {e.longUrl}</p>
          <p>Shortcode: {e.shortcode}</p>
          <p>Created: {new Date(e.expiry).toLocaleString()}</p>
          <p>Expires: {new Date(e.expiry).toLocaleString()}</p>
        </Paper>
      ))}
    </>
  );
};

export default StatsPage;
