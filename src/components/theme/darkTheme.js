import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607d8b", // 500 shade
    },
    secondary: {
      main: "#90a4ae", // 300 shade
    },
    background: {
      default: "#263238", // 900 shade
      paper: "#37474f", // 800 shade
    },
    text: {
      primary: "#FFF", // White color for primary text
      secondary: "#BDBDBD", // Light gray color for secondary text
      accent: "#64B5F6", // Adjusted to match your light theme's accent color
      error: "#EF9A9A", // Adjusted to match your light theme's error color
      success: "#A5D6A7", // Adjusted to match your light theme's success color
      warning: "#FFB74D", // Adjusted to match your light theme's warning color
      info: "#90CAF9", // Adjusted to match your light theme's info color
      heading: "#FFF", // White color for headings
      link: "#64B5F6", // Adjusted to match your light theme's link color
      disabled: "#9E9E9E", // Adjusted to match your light theme's disabled color
      circularLoading: "#EF9A9A", // Adjusted to match your light theme's error color
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