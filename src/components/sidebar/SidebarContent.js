'use client'
import React, { useState } from "react";
import { Divider, MenuItem } from "@lib";
import { useRouter } from "next/navigation";
import { projectDetails } from "@lib/config/project";

const SidebarContent = ({
  uiMenuDivider = false,
  menus = projectDetails.sidebarMenuList,
  userPermissions = ["default"],
}) => {
  const router = useRouter();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMainMenuItemClick = (menuItem, index) => {
    if (menuItem.link) {
      router.push(menuItem.link);
    } else {
      setOpenSubmenu(openSubmenu === index ? null : index);
    }
  };

  const handleSubMenuItemClick = (subMenuItem) => {
    if (subMenuItem.link) {
      router.push(subMenuItem.link);
    }
  };

  const canAccessMenuItem = (userPermissions, menuItem) => {
    // If user has 'SUPERADMIN' permission, allow access to every menu
    if (userPermissions.includes("SUPERADMIN")) {
      return true;
    }

    // If no permissions are required for the menu item, it's accessible
    if (!menuItem.permissions || menuItem.permissions.length === 0) {
      return true;
    }

    // Check if any of the user's permissions match the required permissions for the menu item
    return menuItem.permissions.some((permission) =>
      userPermissions.includes(permission)
    );
  };

  const renderMenuItems = (menuItems) => {
    return menuItems.map((menuItem, index) => {
      const canAccess = canAccessMenuItem(userPermissions, menuItem); // Check if user can access the menu item

      if (!canAccess) {
        return null; // If user cannot access the menu item, do not render it
      }

      return (
        <div key={index}>
          <MenuItem
            className="flex justify-between"
            onClick={() => handleMainMenuItemClick(menuItem, index)}
          >
            <div className="flex">
              {menuItem.icon && <span className="mr-2">{menuItem.icon}</span>}
              <span>{menuItem.text}</span>
            </div>
            <span>
              {menuItem.subMenu && (
                <span>{openSubmenu === index ? "▼" : "▶"}</span>
              )}
            </span>
          </MenuItem>

          {menuItem.subMenu && openSubmenu === index && (
            <div>{renderSubMenuItems(menuItem.subMenu)}</div>
          )}
        </div>
      );
    });
  };

  const renderSubMenuItems = (subMenuItems) => {
    return subMenuItems.map((subMenuItem, index) => {
      const canAccess = canAccessMenuItem(userPermissions, subMenuItem); // Check if user can access the submenu item

      if (!canAccess) {
        return null; // If user cannot access the submenu item, do not render it
      }

      return (
        <MenuItem
          key={index}
          className="pl-10 flex items-center"
          onClick={() => handleSubMenuItemClick(subMenuItem)}
        >
          {subMenuItem.icon && <span className="mr-2">{subMenuItem.icon}</span>}
          {subMenuItem.text}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <Divider />
      <div>{renderMenuItems(menus)}</div>
    </>
  );
};

export default SidebarContent;
