"use client";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  IconButton,
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  NavigateNextIcon
} from "@lib/icons";

import {
  Box,
  Drawer,
  CssBaseline,
  MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  Avatar,
  Switch,
  Paper,
  Image,
  Breadcrumbs
} from "@lib";

import {
  NotificationPopup,
  ProfilePicture,
  SidebarContent,
  ThemeSwitchButton,
} from "@lib/components";

import { projectDetails } from "@lib/config/project";
import Link from "next/link";
import Breadcrumb from "../breadcrumb/Breadcrumb.component";
const sidebarWidth = projectDetails?.sidebarWidth || 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sidebarWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: `${sidebarWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DashboardLayout = ({ pageName, breadcrumbItems, layoutCustomContent, children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box>

      <AppBar position="fixed" open={open} enableColorOnDark>
        <Toolbar className="justify-between">
          <div className="flex items-center">
            {!open && (<>
              <Image
                src="/images/logo/logo.png"
                alt="Example"
                width={200}
                height={40}
              />
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </>
            )}
          </div>

          <div className="flex items-end">
            {projectDetails?.notificationPopupOverAppBar && (
              <div className="pr-2">
                <NotificationPopup />
              </div>
            )}
            {projectDetails?.themeToggleOverAppBar && <ThemeSwitchButton />}
            <ProfilePicture />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.secondary.main
          },

        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Image
            src="/images/logo/logo.png"
            alt="Example"
            width={200}
            height={40}
          />
          <IconButton color="secondary" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <SidebarContent
          uiMenuDivider={true}
          userPermissions={projectDetails?.userRole}
        />
      </Drawer>

      <div style={{
        paddingTop: '65px'
      }}>

        <div className="pl-3 pr-3 flex justify-between">
          <div>
            {pageName && <Typography variant="h5" >{pageName}</Typography>}
            {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
          </div>
          <>
            {layoutCustomContent && layoutCustomContent()}
          </>
        </div>
        <>
          {children}
        </>
      </div>

    </Box>
  );
};

export default DashboardLayout;
