import React from "react";
import { Backdrop, CircularProgress, Typography } from "@lib";
import { projectDetails } from "@lib/config/project";

const CustomBackdrop = ({ color = "primary", loading, loadingMessage }) => {
  return (
    <Backdrop
      color={color}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
      // onClick={hideLoading}
    >
      <div className="flex flex-col items-center justify-center pointer-events-none">
        <CircularProgress color={color} />
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
  );
};

export default CustomBackdrop;
