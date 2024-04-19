import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2', // Example primary color for light theme
    },
    secondary: {
      main: '#1976d2', // Example secondary color for light theme
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
