import React from "react";
import {Box} from "@mui/material";

export const Footer: React.FC = React.memo(() => {
  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', height: 64, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>Footer</p>
    </Box>
  )
});
