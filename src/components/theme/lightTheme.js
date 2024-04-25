import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#14746F", // Example primary color for light theme
    },
    secondary: {
      main: "#469D89", // Example secondary color for light theme,
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
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "yellow",
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
  // custome theme ---
  custom: {
    sidebar: {
      sidebarTextColor: "#fff",
    },
    paper: {
      profileDetailsBg: "#64B9A6",
    },
  },
});

export default lightTheme;
