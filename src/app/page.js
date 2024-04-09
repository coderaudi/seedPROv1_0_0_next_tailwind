"use client";
// home page or landing page
import { DashboardLayout } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton } from "@lib/components/custom";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function APP() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <div className="text-center w-1/2">
          <Typography variant="h3">{projectDetails.projectName}</Typography>
          <Typography variant="h4">v{projectDetails.version}</Typography>
          <p className="mt-4" />

          <CustomButton
            title={"VIEW DEMO LOGIN"}
            onClick={() => {
              console.log("login check ");
              Cookies.set(projectDetails.clientCookiesKey, "true"); // Example: Setting a cookie named "demo_user" with value "true"

              router.push("/dashboard");
            }}
          />

          <Typography
            variant="subtitle2"
            className="mt-4 w-full max-w-1/2 mx-auto"
          >
            {projectDetails.description}
          </Typography>
          <p className="mt-10" />

          <Typography variant="subtitle2" className="w-full max-w-1/2 mx-auto">
            {projectDetails.copyrightMessage}
          </Typography>
        </div>
      </div>
    </div>
  );
}
