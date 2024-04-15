"use client";
import { DashboardLayout, useAuth } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton, CustomPaper } from "@lib/components/custom";
import { removeCookie } from "@lib/utils";
import { Container, Box, Paper } from "@lib";

const DashboardPage = () => {
  return (
    <DashboardLayout>


      <Paper variant="elevation" elevation={2} className="p-2">

        <div className="" >
          <Typography variant="h1" >Where does it come from? 1</Typography>
          <Typography variant="h2" >Where does it come from? 1</Typography>
          <Typography variant="h3" >Where does it come from? 1</Typography>
          <Typography variant="h4" >Where does it come from? 1</Typography>
          <Typography variant="h5" >Where does it come from? 1</Typography>
          <Typography variant="h6" >Where does it come from? 1</Typography>
        </div>
      </Paper>


    </DashboardLayout>
  );
};

export default useAuth(DashboardPage);
