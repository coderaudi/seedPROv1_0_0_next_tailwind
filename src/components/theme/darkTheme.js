import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#5e35b1', // Primary color for dark theme
    },
    secondary: {
      main: '#957', // Example secondary color for dark theme
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#FFF", // White color for IconButton in dark theme
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

export default darkTheme;