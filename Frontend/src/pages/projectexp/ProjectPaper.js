import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ProjectPaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 500,
          height: 500,
          borderRadius: '0 8px 8px 0',
        },
      }}
    >
      <Paper elevation={3} sx={{ position: 'relative' }} /> {/* Apply position: 'relative' here */}
    </Box>
  );
}

