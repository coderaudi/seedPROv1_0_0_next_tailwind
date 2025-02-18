import {
  DashboardIcon,
  PeopleIcon,
  ListIcon,
  ManageUsersIcon,
  OrgStructureIcon,
  SettingsIcon,
  GeneralSettingsIcon,
  SecuritySettingsIcon,
} from "@lib/icons";

const sidebarMenuList = [
  // {
  //   text: "Login",
  //   icon: <DashboardIcon />,
  //   link: "/login",
  //   checkPermissions: false,
  //   permissions: ["user"],
  // },
 
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
    permissions: ["dashboard"],
  },
  {
    text: "About",
    icon: <DashboardIcon />,
    link: "/about",
    checkPermissions: true,
    permissions: ["about"],
  },
  {
    text: "Users",
    icon: <PeopleIcon />,
    permissions: ["user", "manageUsers"],
    subMenu: [
      {
        text: "User List",
        icon: <ListIcon />,
        link: "/user/userlist",
        checkPermissions: true,
        permissions: ["userList"],
      },
      {
        text: "Manage Users",
        icon: <ManageUsersIcon />,
        link: "/user/manageUsers",
        checkPermissions: true,
        permissions: ["manageUsers"],
      },
    ],
  },
  {
    text: "Organizational Structure",
    icon: <OrgStructureIcon />,
    link: "/organization/structure",
    permissions: ["organization-admin"],
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    permissions: ["settings"],
    subMenu: [
      {
        text: "General Settings",
        icon: <GeneralSettingsIcon />,
        link: "/settings/general",
        permissions: ["settings-general"],
        subMenu: [
          {
            text: "Organizational Structure",
            icon: <OrgStructureIcon />,
            link: "/org-structure",
            permissions: ["org-structure"],
          },
          {
            text: "Organizational Structure",
            icon: <OrgStructureIcon />,
            link: "/org-structure",
            permissions: ["org-structure"],
          },
        ],
      },
      {
        text: "Security Settings",
        icon: <SecuritySettingsIcon />,
        link: "/settings/security",
        permissions: ["settings-security"],
      },
    ],
  },
];

const extractMenuPermissions = (menuList) => {
  const extractedPermissions = [];

  menuList.forEach((menuItem) => {
    // Extract permissions from the current menu item
    if (menuItem.link && menuItem.permissions) {
      const permissionObject = {
        link: menuItem.link,
        permissions: menuItem.permissions,
        checkPermissions: menuItem.checkPermissions,
      };

      // Add checkPermissions property if it's true
      if (menuItem.checkPermissions) {
        permissionObject.checkPermissions = menuItem.checkPermissions;
      }

      extractedPermissions.push(permissionObject);
    }

    // Check if the menu item has submenus and recursively extract permissions
    if (menuItem.subMenu) {
      extractedPermissions.push(...extractMenuPermissions(menuItem.subMenu));
    }
  });

  return extractedPermissions;
};

const checkPathIsAllowed = (currentPath, userPermissions) => {
  const result = extractMenuPermissions(sidebarMenuList);
  const allowedPermissions = result?.find(
    (menuItem) => menuItem.link === currentPath && menuItem.checkPermissions
  );

  if (!userPermissions) {
    return allowedPermissions;
  } else {
    // you have user permission array
    if (allowedPermissions?.checkPermissions) {
      // check permssion
      const _isAnyPermissionMatch = allowedPermissions.permissions.some(
        (permission) => userPermissions.includes(permission)
      );

      return _isAnyPermissionMatch;
    } else {
      return true;
    }
  }
};

export { sidebarMenuList, checkPathIsAllowed };
