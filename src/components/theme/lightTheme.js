import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00897b", // 500 shade
    },
    secondary: {
      main: "#00897b", // 300 shade
    },
    background: {
      default: "#ffffff", // Default background color (white)
      paper: "#26a69a", // Paper background color
    },
    text: {
      // Primary text color (usually used for main content)
      primary: "#FFF", // Black color for primary text
      // Secondary text color (often used for subtitles, captions, or less important text)
      secondary: "#FFF", // Dark gray color for secondary text
      // Additional text colors for specific purposes
      accent: "#3f51b5", // Accent color for highlighting or emphasis
      error: "#f44336", // Error color for displaying error messages
      success: "#4caf50", // Success color for indicating successful actions
      warning: "#ff9800", // Warning color for indicating potential issues or warnings
      info: "#2196f3", // Information color for providing additional information
      // Custom text colors for specific use cases
      heading: "#333", // Custom color for headings or titles
      link: "#1976d2", // Custom color for hyperlinks or clickable text
      disabled: "#9e9e9e", // Custom color for disabled or inactive text
      circularLoading: "#f44336",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Default font family
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  
});

export default lightTheme;
