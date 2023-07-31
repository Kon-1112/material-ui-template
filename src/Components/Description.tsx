import {Box, Typography} from "@mui/material";
import React, {ReactNode} from "react";
import {WIDTH} from "../Config";

export type DescriptionProps = {
  message: ReactNode;
  link?: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'grey' | 'white' | 'black';
}

export const Description: React.FC<DescriptionProps> = React.memo((props: DescriptionProps) => {
  return (
    <Box sx={{ maxWidth: WIDTH }}>
      <Typography
        variant="body2"
        align="left"
        sx={{ mx: 1.5, my: 2, color: props.color }}
      >
        {props.message}
      </Typography>
    </Box>
  )
});
