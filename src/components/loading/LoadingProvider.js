import React, { createContext, useContext, useState } from "react";
import { Backdrop, Box } from "@lib";

import { CustomLoading } from "@lib/layout";
const LoadingContext = createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingIcon, setLoadingIcon] = useState("hourglass");
  const [loadingMessage, setLoadingMessage] = useState("");

  const setLoadingState = (isLoading, msg, loadingIcon) => {
    setLoading(isLoading);
    setLoadingMessage(msg || "");
    setLoadingIcon(loadingIcon || "hourglass");
  };

  const showLoading = (msg, loadingIcon) => {
    setLoading(true);
    setLoadingMessage(msg || "");
    setLoadingIcon(loadingIcon || "hourglass");
  };

  const hideLoading = () => {
    setLoading(false);
    setLoadingMessage("");
    setLoadingIcon("hourglass");
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
          <CustomLoading
            loading={true}
            loadingIcon={loadingIcon}
            loadingMessage={loadingMessage}
          />
        </Box>
      </Backdrop>
    </LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
