"use client";
import { DashboardLayout, PageContainer, useAuth } from "@lib/layout";
import Typography from "@mui/material/Typography";
import { CustomButton } from "@lib/components/custom";
import { getCookie } from "@lib/utils";
import { useState } from "react";

const ContactUsPage = () => {
  const [cookiesInfo, setCookiesInfo] = useState(null);

  const getToken = async () => {
    const cook_ = getCookie();
    console.log("cook", cook_);
    setCookiesInfo(cook_);
  };

  return (
    <DashboardLayout>
      <PageContainer>
        <Typography variant="h4">Security Page</Typography>
        <CustomButton
          onClick={() => {
            getToken();
          }}
          title={"Cookies Token Check"}
        />

        <div className="shadow-lg p-10 overflow-visible">
          {cookiesInfo && <pre>{JSON.stringify(cookiesInfo, null, 2)}</pre>}
        </div>
      </PageContainer>
    </DashboardLayout>
  );
};

export default useAuth(ContactUsPage);
