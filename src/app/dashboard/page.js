"use client";
import { DashboardLayout, PageContainer, useAuth } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton, CustomPaper } from "@lib/components/custom";
import { removeCookie } from "@lib/utils";
import { Container, Box, Paper } from "@lib";

const DashboardPage = () => {
  return (
    <DashboardLayout>


      <PageContainer>
        <Typography variant="h1" >Where does it come from? 1</Typography>

      </PageContainer>


      <PageContainer>
        <Typography variant="h1" >Where does it come from? 1</Typography>

      </PageContainer>
    </DashboardLayout>
  );
};

export default useAuth(DashboardPage);
