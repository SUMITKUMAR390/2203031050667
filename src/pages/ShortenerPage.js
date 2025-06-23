import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';


import UrlList from '../components/UrlList';
import { logEvent } from '../middleware/logger';

const ShortenerPage = () => {
  const [shortened, setShortened] = useState([]);

  const handleShorten = (urls) => {
    const newEntries = urls.map((u) => {
      const code = u.shortcode || Math.random().toString(36).substring(2, 7);
      const validMins = parseInt(u.validity) || 30;
      const expiry = new Date(Date.now() + validMins * 60000);
      return {
        ...u,
        shortcode: code,
        expiry,
      };
    });

    logEvent('Shortened URLs created', newEntries);
    setShortened(prev => [...prev, ...newEntries]);
    localStorage.setItem('shortenedUrls', JSON.stringify([...shortened, ...newEntries]));
  };

  return (
    <>
      <h2>URL Shortener</h2>
      <UrlForm onShorten={handleShorten} />
      <UrlList urls={shortened} />
    </>
  );
};

export default ShortenerPage;
