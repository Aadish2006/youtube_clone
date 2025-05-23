import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos ,direction}) => {
  if(!videos?.length) return 'Loading...'
  return (
    <>
      {videos?.length ? (
        <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
          {videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))}
        </Stack>
      ) : (
        <Typography color="#fff">Loading...</Typography>
      )}
    </>
  );
};

export default Videos;
