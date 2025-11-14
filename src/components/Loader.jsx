import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ text = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // full screen loader
        gap: 2,
      }}
    >
      <CircularProgress color="primary" size={50} thickness={4} />
      <Typography variant="body1" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
