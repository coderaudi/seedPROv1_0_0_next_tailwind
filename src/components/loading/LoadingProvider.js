import React, { createContext, useContext, useState } from "react";
import { CircularProgress, Typography, Backdrop, Box } from "@lib";
import { projectDetails } from "@lib/config/project";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"; // Import the icon
import { Fab } from "@mui/material";

const LoadingContext = createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const setLoadingState = (isLoading, msg) => {
    setLoading(isLoading);
    setLoadingMessage(msg || "");
  };

  const showLoading = (msg) => {
    setLoading(true);
    setLoadingMessage(msg || "");
  };

  const hideLoading = () => {
    setLoading(false);
    setLoadingMessage("");
  };

  return (
    <LoadingContext.Provider
      value={{ loading, setLoadingState, showLoading, hideLoading }}
    >
      {children}

      <Backdrop
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={hideLoading}
      >
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab
            className="animate-spin transition delay-1000"
            aria-label="save"
            color=""
            // sx={buttonSx}
            // onClick={handleButtonClick}
          >
            <HourglassEmptyIcon color="primary" fontSize="large" />{" "}
          </Fab>
          <Typography
            variant="h6"
            color="text.primary"
            className="mt-5 animate-pulse" // Adjust the margin top
          >
            {loadingMessage && loadingMessage}
          </Typography>
        </Box>
      </Backdrop>
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
