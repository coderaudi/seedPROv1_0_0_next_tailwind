import React from "react";
import { Box, Paper } from "@lib";
import { useTheme } from "@lib/layout";

const CardContainer = ({ color, children }) => {
  const theme = useTheme();

  const paperStyle = {
    background: color ? color : null,
  };

  return (
    <Box
      sx={{
        boxShadow: `0px 4px 6px ${theme.palette.primary.main}`,
        p: 1,
        m: 1,
        borderRadius: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
