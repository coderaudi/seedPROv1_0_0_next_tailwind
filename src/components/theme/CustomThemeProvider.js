import React, { createContext, useState } from "react";
import NestedThemeProvider from "./NestedThemeProvider";

const CustomThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const updateTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  const contextValue = {
    currentTheme,
    setCurrentTheme: updateTheme,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <NestedThemeProvider>{children}</NestedThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeProvider, CustomThemeContext };
