'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CircularProgress } from "@lib"; // Assuming you have a CircularProgress component
import { getCookie } from "@lib/utils"; // Utility function to retrieve cookies
import { checkPathIsAllowed } from "src/lib/projectSetup/sidebarMenuList"; // Utility to check permissions

const useAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const currentPath = usePathname(); // Get current path using useRouter

    // Retrieve cookies (including user data and permissions)
    const _cookies = getCookie();

    useEffect(() => {
      const fetchAuthStatus = async () => {
        try {
          if (!_cookies || !_cookies.currentUserPermission) {
            // If no cookies or permissions, force redirect to Access Denied
            setIsAuthenticated(false);
            return;
          }

          const userPermissions = _cookies.currentUserPermission; // Get permissions from cookies
          console.log("User Permissions from Cookies:", userPermissions);

          // Check if the current path is allowed based on the user's permissions
          const isAuthed = checkPathIsAllowed(currentPath, userPermissions);
          console.log("Auth Check Result:", isAuthed);

          setIsAuthenticated(isAuthed); // Set authentication status based on the check
        } catch (error) {
          console.error("Authentication error:", error);
          setIsAuthenticated(false);
        } finally {
          setLoading(false); // Set loading to false after the check is complete
        }
      };

      fetchAuthStatus();
    }, [currentPath, _cookies]); // Re-run when cookies or path change
    
    if (loading) {
      // Show a loading spinner while checking authentication
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
          <CircularProgress />
        </div>
      );
    }

    // Redirect to Access Denied page if no cookies or insufficient permissions
    if (!_cookies || !isAuthenticated) {
      console.log("Redirecting to Access Denied...");
      router.push("/help/AccessDenied");
      return null; // Return null to prevent rendering the wrapped component
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default useAuth;
