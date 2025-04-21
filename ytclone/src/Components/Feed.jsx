import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Sidebar from './SideBar';
import Videos from './Videos';

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Sidebar */}
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #d3d3d3',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2025 Aadish
        </Typography>
      </Box>

      {/* Main Feed */}
      <Box sx={{ flex: 2, overflowY: 'auto', height: '90vh' }}>
        {/* Gradient Header */}
        <Box
          sx={{
            background:
              'linear-gradient(90deg, rgba(180, 58, 172, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            mb: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#fff">
            {selectedCategory} <span style={{ color: '#000' }}>Videos</span>
          </Typography>
        </Box>

        {/* Videos List */}
        <Box px={2}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
