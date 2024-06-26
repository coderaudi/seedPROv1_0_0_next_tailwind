"use client";
import { useEffect, useState } from "react";
import { usePathname, redirect } from "next/navigation";
import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const inter = Inter({ subsets: ["latin"] });

import { projectDetails } from "@lib/config/project";

// providers -->
import { CustomThemeProvider } from "src/components/theme/CustomThemeProvider";
import { LoadingProvider } from "src/components/loading/LoadingProvider";
import { checkPathIsAllowed } from "src/lib/projectSetup/sidebarMenuList";
import { Backdrop, CircularProgress } from "@lib";
import { getCookie } from "@lib/utils";

const metadata = {
  title: projectDetails?.projectName || "Create Next App",
  description: projectDetails?.description || "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const _pathUpdated = usePathname();
  // const { isAuthenticated, loading } = useAuth();
  // const [securityChecking, setSecurityChecking] = useState(true);
  const { snackbarDetails } = projectDetails;
  const userPermissions = ["dashboard1", "admin1"];

  useEffect(() => {
    const _cookies = getCookie();
    console.log("layout mounted");
    console.log("layout _cookies", _cookies);
    // if (!_cookies) {
    //   redirect('/login'); // Redirect to login page if token is not present
    // }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>{loading ? <>"isAuthenticated CHECKING"</> : "DONE check"}</h1>{" "} */}
        {/* <h1>{isAuthenticated ? "isAuthenticated" : "NOT isAuthenticated"}</h1>{" "} */}
        <CustomThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <>
            {loading && (
              <div style={{ position: "absolute", top: "45%", left: "50%" }}>
                <CircularProgress />
              </div>
            )}
          </> */}
            <LoadingProvider>
              <SnackbarProvider {...snackbarDetails}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                  <>{children}</>
                </AppRouterCacheProvider>
              </SnackbarProvider>
            </LoadingProvider>
          </LocalizationProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
