"use client";
import React, { useEffect } from "react";
import { Switch } from "@lib";
import { getFromLocalStorage, setToLocalStorage } from "@lib/utils";
import { Brightness4Icon, Brightness7Icon } from "@lib/icons";
import { useCustomTheme } from "@lib/layout";
import { projectDetails } from "@lib/config/project";

const ThemeSwitchButton = () => {
  const { projectThemeLSKey } = projectDetails;
  const { currentTheme, setCurrentTheme } = useCustomTheme("light");

  // useEffect(() => {
  //   // Check if theme is stored in local storage
  //   const storedTheme = getFromLocalStorage(projectThemeLSKey);
  //   if (storedTheme) {
  //     // If theme is stored, set the current theme state to the stored theme
  //     setCurrentTheme(storedTheme);
  //   }
  // }, []); // Run this effect only once when component mounts

  return (
    <>
      <Switch
        onChange={() => {
          const _updatedTheme = currentTheme != "dark" ? "dark" : "light";
          setCurrentTheme(_updatedTheme);
          setToLocalStorage(projectThemeLSKey, _updatedTheme);
        }}
        // color="secondary"
        inputProps={{ "aria-label": "toggle theme" }}
        checked={currentTheme === "dark"}
        icon={<Brightness4Icon fontSize="small" />}
        checkedIcon={<Brightness7Icon fontSize="small" />}
        disableRipple
      />
    </>
  );
};

export default ThemeSwitchButton;
