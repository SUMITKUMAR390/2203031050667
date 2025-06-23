import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { logEvent } from '../middleware/logger';

const UrlForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    logEvent('Submitting URLs', urls);
    onShorten(urls);
  };

  const addField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  return (
    <Box>
      {urls.map((url, idx) => (
        <Box key={idx} mb={2}>
          <TextField label="Long URL" fullWidth value={url.longUrl} onChange={e => handleChange(idx, 'longUrl', e.target.value)} />
          <TextField label="Validity (min)" type="number" fullWidth value={url.validity} onChange={e => handleChange(idx, 'validity', e.target.value)} />
          <TextField label="Custom Shortcode" fullWidth value={url.shortcode} onChange={e => handleChange(idx, 'shortcode', e.target.value)} />
        </Box>
      ))}
      <Button variant="contained" onClick={addField} disabled={urls.length >= 5}>+ Add Another</Button>
      <Button variant="outlined" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
};

export default UrlForm;
