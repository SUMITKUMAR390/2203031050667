import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const UrlList = ({ urls }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6">Shortened URLs</Typography>
      {urls.map((item, i) => (
        <Paper key={i} style={{ margin: '10px', padding: '10px' }}>
          <p>Original: {item.longUrl}</p>
          <p>Short: http://localhost:3000/{item.shortcode}</p>
          <p>Expires: {new Date(item.expiry).toLocaleString()}</p>
        </Paper>
      ))}
    </Box>
  );
};

export default UrlList;
