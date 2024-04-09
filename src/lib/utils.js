import { sidebarMenuList } from "./projectSetup/sidebarMenuList";

// Function to set data to local storage
export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting data to local storage:", error);
  }
};

// Function to get data from local storage
export const getFromLocalStorage = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error getting data from local storage:", error);
    return null;
  }
};

// AUTH functions

// Function to check if the user has permission to visit a page
export const checkPermissionForPage = (userPermissions, pagePath) => {
  // Find the menu item corresponding to the given pagePath
  const menuItem = sidebarMenuList.find((item) => item.link === pagePath);

  // If the menuItem exists and it has permissions specified
  if (menuItem && menuItem.permissions) {
    // Check if the user has any of the required permissions
    return menuItem.permissions.some((permission) =>
      userPermissions.includes(permission)
    );
  }

  // If menuItem doesn't exist or it doesn't have permissions specified, return true
  return true;
};

// Function where you pass the path of the page you want to check permission for
export const checkPermissionForPath = (userPermissions, path) => {
  // Call the checkPermissionForPage function with the provided path
  return checkPermissionForPage(userPermissions, path);
};
