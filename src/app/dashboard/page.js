"use client";
import { DashboardLayout } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton } from "@lib/components/custom";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-full">
        <div>
          <Typography variant="h1">YOU ARE INN</Typography>
          <Typography variant="h6">DASHBOARD PAGE </Typography>
        </div>
      </div>
      <CustomButton title={"test btn"} />
    </DashboardLayout>
  );
};

export default DashboardPage;
