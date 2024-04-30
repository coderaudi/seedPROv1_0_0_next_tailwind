import React, { useState } from "react";
import { Fullscreen, FullscreenExit } from "@lib/icons"; // Import your Fullscreen and FullscreenExit icons

const FullScreenAPP = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
        });
      }
    }
  };

  return (
    <span
      style={{
        cursor: "pointer",
      }}
      onClick={toggleFullScreen}
      aria-label="toggle fullscreen"
    >
      {isFullScreen ? (
        <FullscreenExit fontSize="large" color="text.primary" />
      ) : (
        <Fullscreen fontSize="large" color="text.primary" />
      )}
    </span>
  );
};

export default FullScreenAPP;
