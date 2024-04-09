"use client";
import React from "react";
import { useSnackbar, DashboardLayout } from "@lib/layout";
import { Button } from "@lib";
import { CustButton } from "@lib/components/custom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Settings from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";

const TestPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <DashboardLayout>
      <div>
        <div>Test Page</div>
      </div>
    </DashboardLayout>
  );
};

export default TestPage;
