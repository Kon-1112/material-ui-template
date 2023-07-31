import React from "react";
import {Box, LinearProgress} from "@mui/material";

export type LoadingProps = {
  loading: boolean;
}

export const Loading: React.FC<LoadingProps> = React.memo((props: LoadingProps): JSX.Element => {
  return (
    <React.Fragment>
      {
        props.loading && (
          <React.Fragment>
            <Box sx={{ position: 'fixed', top: 0, width: '100vw', zIndex: 10000 }}>
              <LinearProgress />
            </Box>
            <Box sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
              backgroundColor: 'rgba(220, 220, 220, 0.5)',
            }}>
            </Box>
          </React.Fragment>
        )
      }
    </React.Fragment>
  )
});
