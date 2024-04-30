"use client";
import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  Popover,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import {
  MoreVertIcon,
  PersonAdd,
  Logout,
  Settings,
  Security,
  LinkSharp,
  AccountBox,
  ManageAccounts,
} from "@lib/icons";
import { ThemeSwitchButton } from "@lib/components";
import { Divider, Paper } from "@lib";
import FullScreenAPP from "./FullScreenApp";
import NotificationPopup from "./NotificationPopup";
import { useRouter } from "next/navigation";
import { getCookie, removeCookie } from "@lib/utils";
import { useTheme } from "@lib/layout";
const ProfilePicture = ({}) => {
  const { push } = useRouter();
  const _cookies = getCookie();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Define your menu list
  const menuList = [
    {
      text: "Profile",
      icon: <AccountBox fontSize="small" className="mr-2" />,
      link: "/profile",
      onClick: () => {
        push("/profile");
      },
    },
    {
      text: "Account Update",
      icon: <ManageAccounts fontSize="small" className="mr-2" />,
      link: "/account-update",
    },
    {
      text: "Social Links",
      icon: <LinkSharp fontSize="small" className="mr-2" />,
      link: "/social-links",
      divided: true,
    },
    {
      text: "Security",
      icon: <Security fontSize="small" className="mr-2" />,
      link: "/security",
      onClick: () => {
        push("/security");
      },
    },
    {
      text: "Settings",
      icon: <Settings fontSize="small" className="mr-2" />,
      link: "/settings",
      divided: true,
    },
    {
      text: "Logout",
      icon: <Logout fontSize="small" className="mr-2" />,
      link: "/logout",
      onClick: () => {
        push("/login");
        removeCookie();
      },
    },
  ];

  return (
    <div className="p-1">
      <IconButton color="inherit" onClick={handleClick}>
        <Avatar alt="Profile Picture" src={_cookies?.image} />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Paper
          style={{
            color: theme.custom.sidebar.sidebarTextColor,
            background: theme.custom.paper.profileDetailsBg,
          }}
        >
          <div className="flex p-3">
            <div className="w-1/3 pr-2">
              <Avatar alt="Profile Picture" src={_cookies?.image} />
            </div>

            <div className="w-4/7">
              <div className="text-lg font-semibold">{_cookies?.sername}</div>
              <div className="text-sm ">{_cookies?.email}</div>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-center">
            <FullScreenAPP />
            <ThemeSwitchButton />
          </div>
          <Divider />
          {menuList?.map((menuItem, index) => (
            <>
              <MenuItem
                key={index}
                // component={Link}
                // to={menuItem.link}
                onClick={menuItem.onClick || handleClose}
              >
                {menuItem.icon && menuItem.icon}
                {menuItem.text}
              </MenuItem>

              {menuItem?.divided && <Divider color="white" />}
            </>
          ))}
        </Paper>
      </Popover>
    </div>
  );
};

export default ProfilePicture;
