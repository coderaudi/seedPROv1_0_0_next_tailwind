import Cookies from "js-cookie";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption and decryption

import { sidebarMenuList } from "./projectSetup/sidebarMenuList";
import { projectDetails } from "./projectDetails";
const { clientCookiesKey } = projectDetails;
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

// Utility function to set data in a cookie
export const setCookie = (data, options = {}) => {
  Cookies.set(clientCookiesKey, JSON.stringify(data), options);
};

// Utility function to get data from a cookie
export const getCookie = () => {
  const cookieData = Cookies.get(clientCookiesKey);
  return cookieData ? JSON.parse(cookieData)?.data : null;
};

// Utility function to remove a cookie
export const removeCookie = () => {
  Cookies.remove(clientCookiesKey);
};

// Utility function to encrypt data and set cookie
export const setEncryptedCookie = (key, data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    projectDetails.COOKIES_ENCRYPTION_KE
  ).toString();
  Cookies.set(key, encryptedData);
  Cookies.set("abc_audi", "abc audi 123123 data");
};

// Utility function to get encrypted cookie and decrypt data
export const getDecryptedCookie = (key) => {
  const encryptedData = Cookies.get(key);

  console.log("you have encryptedData --> ", encryptedData);
  if (encryptedData) {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(
        encryptedData,
        projectDetails.COOKIES_ENCRYPTION_KEY
      );
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error("Error decrypting cookie:", error);
      return null;
    }
  }
  return null;
};
