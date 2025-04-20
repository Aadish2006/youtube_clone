import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Sidebar Section */}
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #d3d3d3',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2025 Aadish
        </Typography>
      </Box>

      {/* Main Feed Section - for example */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="h6" color="#fff">
          Main Feed Content Here
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
