import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CachedIcon from "@mui/icons-material/Cached";
import SettingsIcon from "@mui/icons-material/Settings";

const CustomLoading = ({ loading, loadingMessage, loadingIcon }) => {
  const icons = {
    hourglass: <HourglassEmptyIcon color="primary" fontSize="large" />,
    cached: <CachedIcon color="primary" fontSize="large" />,
    settings: <SettingsIcon color="primary" fontSize="large" />,
  };

  const getLoadingIcon = () => icons[loadingIcon] || icons.hourglass;

  return loading ? (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Fab
        className="animate-spin transition delay-1000"
        aria-label="loading"
        color=""
      >
        {getLoadingIcon()}
      </Fab>
      <Typography variant="h6" color="text.primary" mt={1}>
        {loadingMessage}
      </Typography>
    </Box>
  ) : null;
};

export default CustomLoading;
