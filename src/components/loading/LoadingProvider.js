// LoadingProvider.js
import React, { createContext, useContext, useState } from "react";
import { CircularProgress, Typography, Backdrop } from "@lib";
import { projectDetails } from "@lib/config/project";

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
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <CircularProgress color="primary" />
          <Typography
            variant="h6"
            color="text.primary"
            className="mt-6 animate-pulse"
          >
            {(loadingMessage && loadingMessage) ||
              projectDetails?.backdropMessage}
          </Typography>
        </div>
      </Backdrop>
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
