import React from "react";
import {Box, Typography} from "@mui/material";
import {WIDTH} from "../Config";

export type SubTitleProps = {
  subTitle: string;
}

export const SubTitle: React.FC<SubTitleProps> = React.memo((props: SubTitleProps) => {
  return (
    <Box sx={{ maxWidth: WIDTH }}>
      <Typography
        variant="h3"
        align="left"
        sx={{ mx: 1.5, mt: 3, mb: -0.5 }}
      >
        {props.subTitle}
      </Typography>
    </Box>
  )
});
