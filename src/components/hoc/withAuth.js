// File not in use 

// // hoc/withAuth.js
// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation"; // Changed import statement
// import { enqueueSnackbar } from "notistack"; // Assuming correct usage
// import { ACCESS_DENIED } from "@lib/messages";
// import { checkPathIsAllowed } from "src/lib/projectSetup/sidebarMenuList";
// import { CircularProgress } from "@lib";
// import { getCookie } from "@lib/utils";

// const userPermissions = ["dashboard", "admin-about"];

// const withAuth = (WrappedComponent) => {
//   const Wrapper = (props) => {
//     const [loading, setLoading] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const router = useRouter(); // Added useRouter hook
//     const currentPath = usePathname(); // Get current path using useRouter

//     const _cookies =   getCookie();


//     useEffect(() => {
//       console.log("YOu are inside withAUth")
//       const fetchAuthStatus = async () => {
//         try {
//           // Fetch user permissions or any other authentication check
//           const isAuthed = checkPathIsAllowed(currentPath, userPermissions);
//           setIsAuthenticated(isAuthed);
//         } catch (error) {
//           console.error("Authentication error:", error);
//           // Handle error appropriately, e.g., redirect to an error page
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchAuthStatus();
//     }, [currentPath]); // Include router.pathname in the dependency array

//     if (loading) {
//       return (
//         <div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "80vh",
//             }}
//           >
//             <CircularProgress />
//           </div>
//         </div>
//       );
//     }

//     if (false && !_cookies || !isAuthenticated) {
//       // Redirect to login or error page using router.push
//       router.push("/help/AccessDenied");
//     } else {
//       return <WrappedComponent {...props} />;
//     }
//   };

//   return Wrapper;
// };

// export default withAuth;
