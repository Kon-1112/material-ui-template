import React from "react";
import {WIDTH} from "../Config";

export const HorizontalRule: React.FC = React.memo(() => {
  return (
    <hr
      style={{
        maxWidth: WIDTH,
        height: 1,
        border: 'none',
        backgroundColor: '#e0e0e0',
        margin: '14px 0',
      }}
    />
  )
});
