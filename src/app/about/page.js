"use client";
import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@lib";
import { projectDetails } from "@lib/config/project";
import { useSnackbar, useLoading, useAuth } from "@lib/layout";

const AboutPage = () => {
  return (
    <div className="p-10">
      <Paper elevation={3} className="p-10">
        <div className="flex justify-center items-center h-full">
          <div className="text-center w-1/2">
            <Typography variant="h3">{projectDetails.projectName}</Typography>
            <Typography variant="h4">v{projectDetails.version}</Typography>
            <p className="mt-4" />

            <Typography
              variant="subtitle2"
              className="mt-4 w-full max-w-1/2 mx-auto"
            >
              {projectDetails.description}
            </Typography>
            <p className="mt-10" />

            <Typography
              variant="subtitle2"
              className="w-full max-w-1/2 mx-auto"
            >
              {projectDetails.copyrightMessage}
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default useAuth(AboutPage);
