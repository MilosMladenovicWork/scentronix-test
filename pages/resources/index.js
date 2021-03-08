import React from 'react';

import { Container, Typography, Box } from '@material-ui/core';

export default function Shop() {
  return (
    <Container disableGutters>
      <Box p={5}>
        <Typography variant="h1">Some page heading</Typography>
        <Typography variant="body1">Some page body text.</Typography>
      </Box>
    </Container>
  );
}
