import React from "react";
import {Box, Switch, Typography} from "@mui/material";
import {WIDTH} from "../../Config";

export type SwitchFormProps = {
  title: string;
  message: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: WIDTH,
}

export const SwitchForm: React.FC<SwitchFormProps> = React.memo((props: SwitchFormProps) => {

  return (
    <Box sx={style}>
      <Box sx={{ p: 1.5 }}>
        <Typography
          variant="h6"
          align="left"
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          align="left"
        >
          {props.message}
        </Typography>
      </Box>
      <Switch
        sx={{ my: 'auto' }}
        checked={props.checked}
        disabled={props.disabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          props.onChange(event.target.checked);
        }}
      />
    </Box>
  )
});