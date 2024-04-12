import { sidebarMenuList } from "./projectSetup/sidebarMenuList";
const projectDetails = {
  COOKIES_ENCRYPTION_KEY : "seed_pro-encryptionv1_25hash-key",
  clientCookiesKey: "seedPRO_secret_007_client",
  userRole: "SUPERADMIN",
  isSecureRoutingActivated: true,
  userPermissions: {
    permissions: ["dashboard", "user"],
  },
  localStorageKey: "",
  // Project metadata
  projectName: "Seed PRO",
  description:
    "A comprehensive React and Next.js project seed equipped with Material-UI, Tailwind CSS, and other essential libraries. This seed project is meticulously crafted to serve as a ready-to-use template for rapidly starting new projects without the hassle of setting up basic configurations. It includes pre-configured layouts, theming, and essential UI components, allowing you to jumpstart your development process and focus on implementing business logic right away.",
  version: "1.0.0",
  copyrightMessage:
    "© 2024 SEED PRO Developers are not responsible for any sudden outbreaks of spontaneous dancing, uncontrollable laughter, or moments of extreme productivity while using this project. Proceed with caution and enjoy the ride! 🤣🚀",
  author: "Abhijeet Khire",
  repository: "https://github.com/yourusername/my-react-app",
  menuSide: "left",
  // profile
  //
  developemnt: true,
  themeToggle: true,
  defaultTheme: "light",
  projectThemeLSKey: "seedProject_v1_theme",
  // other -->
  sidebarWidth: 280,
  sidebarMenuList: sidebarMenuList,

  // Other configuration parameters can be added here

  // theme toggle
  themeToggleOverAppBar: false,
  themeToggleOnProfile: true,

  // notifications Icons
  notificationPopupOverAppBar: true,
  notificationPopupOnAppBar: true,
  //  SnackbarProvider details:
  snackbarDetails: {
    maxSnack: 4, // default 3
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    autoHideDuration: 5000, // 5 sec
  },

  // errors or Message
  backdropMessage: "Loading...",
};

export { projectDetails };
