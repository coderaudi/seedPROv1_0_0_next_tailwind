import { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeProvider";

const useCustomTheme = () => useContext(CustomThemeContext);

export default useCustomTheme;
