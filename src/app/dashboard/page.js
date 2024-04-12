"use client";
import { DashboardLayout , useAuth} from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton } from "@lib/components/custom";
import { removeCookie } from "@lib/utils";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-full">
        <div>
          <Typography variant="h1">YOU ARE INN</Typography>
          <Typography variant="h6">DASHBOARD PAGE </Typography>
        </div>
      </div>
      <CustomButton title={"remove cookies btn"} 
       onClick={()=>{
        removeCookie()
       }}
      />
    </DashboardLayout>
  );
};

export default useAuth(DashboardPage);
