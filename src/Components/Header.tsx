import React from "react";
import {Avatar, Box, Divider, IconButton, Typography} from "@mui/material";
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';

export type HeaderProps = {
  username: string;
}

export const Header: React.FC<HeaderProps> = React.memo((props: HeaderProps) => {
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: 64, alignItems: 'center' }}>
        <Typography
          variant="h3"
          sx={{ mx: 3 }}
        >
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Avatar
            sx={{ mr: 2 }}
          >
            A
          </Avatar>
        </Box>
      </Box>
      <Divider sx={{ mx: 2 }} />
    </React.Fragment>
  )
});
