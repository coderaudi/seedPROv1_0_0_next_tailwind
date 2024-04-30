"use client";
import Typography from "@mui/material/Typography";
import { projectDetails } from "@lib/config/project";
import { CustomButton } from "@lib/components/custom";
import { useRouter } from "next/navigation";

export default function APP() {
  const { forward, push } = useRouter();

  const handleLoginClick = () => {
    push("/login");
  };

  return (
    <div className="flex justify-center items-center h-full mt-12">
      <div className="text-center w-1/2">
        <Typography variant="h3">{projectDetails.projectName}</Typography>
        <Typography variant="h4">v{projectDetails.version}</Typography>
        <p className="mt-4" />

        <CustomButton title={"VIEW SEED PRO DEMO"} onClick={handleLoginClick} />

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
  );
}
