"use client";
import { DashboardLayout, useAuth } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton } from "@lib/components/custom";
import { removeCookie } from "@lib/utils";
import { Container, Box , Paper} from "@lib";

const DashboardPage = () => {
  return (
    <DashboardLayout>
  
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
      <h1>test </h1>
    </DashboardLayout>
  );
};

export default useAuth(DashboardPage);
