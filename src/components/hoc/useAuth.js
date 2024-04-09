import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { checkPathIsAllowed } from "src/lib/projectSetup/sidebarMenuList";
import { useRouter, redirect, usePathname } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { ACCESS_DENIED } from "@lib/messages";

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userPermissions = ["dashboard", "admin-about123"];
  const currentPath = usePathname();

  useEffect(() => {
    console.log("with AUTH mount--->", currentPath);
  }, []);

  useEffect(() => {
    console.log("use AUTH Path Updated--->", currentPath);
    setIsAuthenticated(false);
    const isAuthed = checkPathIsAllowed(currentPath, userPermissions);
    // user API call to chck permission and token/cookies
    setLoading(false);
    if (!isAuthed) {
      router.back();
      enqueueSnackbar({
        message: ACCESS_DENIED,
        variant: "error",
      });
    }
    setIsAuthenticated(isAuthed);
  }, [currentPath]);

  // Expose isAuthenticated as a prop
  return {
    isAuthenticated: isAuthenticated,
    loading,
  };
};
