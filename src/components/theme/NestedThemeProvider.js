import { ThemeProvider } from "@mui/material/styles";
import { useCustomTheme } from "@lib/layout";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

const NestedThemeProvider = ({ children }) => {
  const { currentTheme } = useCustomTheme(); // Access current theme using the hook

  // Select theme based on current theme
  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NestedThemeProvider;
