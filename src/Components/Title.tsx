import React from "react";
import {Box, Typography} from "@mui/material";
import {WIDTH} from "../Config";

export type TitleProps = {
  title: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'grey' | 'white' | 'black';
}

export const Title: React.FC<TitleProps> = React.memo((props: TitleProps) => {
  return (
    <Box sx={{ maxWidth: WIDTH }}>
      <Typography
        variant="h3"
        align="left"
        sx={{ mx: 1.5, my: 3, color: props.color ?? 'black' }}
      >
        {props.title}
      </Typography>
    </Box>
  )
});