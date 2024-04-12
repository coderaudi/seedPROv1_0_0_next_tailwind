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
import { removeCookie } from "@lib/utils";




const ProfilePicture = ({ src, name, email }) => {
  const router = useRouter();
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
      router.push('/login')
      removeCookie();
      
    },
  },
];


  return (
    <div className="p-1">
      <IconButton color="inherit" onClick={handleClick}>
        <Avatar alt="Profile Picture" src={src} />
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
        <Paper>
          <div className="flex p-3">
            <div className="w-1/3 pr-2">
              <Avatar alt="Profile Picture" src={src} />
            </div>

            <div className="w-4/7">
              <div className="text-lg font-semibold">Sunny Doe</div>
              <div className="text-sm text-gray-500">john.doe@example.com</div>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-center">
            <p />
            <FullScreenAPP /> {/* Include FullScreenAPP component */}
            <p />
            <NotificationPopup />
            <p />
            <ThemeSwitchButton /> {/* Include ThemeSwitchButton component */}
            <p />
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

              {menuItem?.divided && <Divider />}
            </>
          ))}
        </Paper>
      </Popover>
    </div>
  );
};

export default ProfilePicture;
