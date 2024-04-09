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
      primary: "#eceff1", // 50 shade
      secondary: "#cfd8dc", // 100 shade
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
    fontFamily: "Arial",
    h1: {
      fontSize: "2rem",
      background: "#263238", // 900 shade for h1 background
    },
  },
});

export default darkTheme;
