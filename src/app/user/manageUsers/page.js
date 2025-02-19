"use client";
import React, { useState, useEffect } from "react";
import { DashboardLayout, useAuth } from "@lib/layout";

const permissionOptions = [
  { value: "dashboard", label: "Dashboard" },
  { value: "about", label: "About" },
  { value: "manageUsers", label: "Manage Users" },
  { value: "settings", label: "Settings" },
  { value: "reports", label: "Reports" },
  { value: "userList", label: "userList" }
];

const ManageUser = () => {
  // State to store users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for better UX
  const [error, setError] = useState(null); // State for error handling
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [editingUser, setEditingUser] = useState(null); // State to track which user is being edited
  const [newEmail, setNewEmail] = useState(""); // New email value
  const [newPassword, setNewPassword] = useState(""); // New password value
  const [newPermissions, setNewPermissions] = useState([]); // State for storing updated permissions

  // Fetch users from localStorage on page load
  useEffect(() => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem("seedPro_usersList")) || [];
      setUsers(storedUsers);
      setLoading(false); // Set loading to false after fetching users
    } catch (e) {
      setError("Failed to load users.");
      setLoading(false); // Stop loading in case of error
    }
  }, []);

  // Handle user deletion
  const handleDeleteUser = (username) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete user: ${username}?`);
    if (confirmDelete) {
      const updatedUsers = users.filter((user) => user.username !== username);
      setUsers(updatedUsers);
      localStorage.setItem("seedPro_usersList", JSON.stringify(updatedUsers));
    }
  };

  // Handle user update (email, password, and permissions)
  const handleUpdateUser = (username) => {
    const updatedUsers = users.map((user) =>
      user.username === username
        ? { 
            ...user, 
            email: newEmail || user.email, 
            password: newPassword || user.password,
            currentUserPermission: newPermissions.length > 0 ? newPermissions : user.currentUserPermission 
          }
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("seedPro_usersList", JSON.stringify(updatedUsers));
    setEditingUser(null); // Close the edit form
    setNewEmail(""); // Clear input
    setNewPassword(""); // Clear input
    setNewPermissions([]); // Clear permissions
  };

  // Loading or error state
  if (loading) {
    return (
      <DashboardLayout pageName={"Manage User"}>
        <div className="text-center py-4">Loading...</div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout pageName={"Manage User"}>
        <div className="text-center py-4 text-red-600">{error}</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout pageName={"Manage User"}>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Permissions</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.username} className="border-b">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">
                    {editingUser === user.username ? (
                      <input
                        type="email"
                        value={newEmail || user.email}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="border border-gray-300 px-2 py-1 rounded"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.username ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={newPassword || user.password}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="border border-gray-300 px-2 py-1 rounded"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    ) : (
                      "*****" // Masked password
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.username ? (
                      <div className="flex flex-col">
                        <select
                          multiple
                          value={newPermissions.length > 0 ? newPermissions : user.currentUserPermission || []} // Default to empty array if undefined
                          onChange={(e) => {
                            const selectedPermissions = Array.from(e.target.selectedOptions, option => option.value);
                            setNewPermissions(selectedPermissions);
                          }}
                          className="border border-gray-300 px-2 py-1 rounded"
                        >
                          {permissionOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      // Safe check for undefined or empty `currentUserPermission`
                      Array.isArray(user.currentUserPermission) && user.currentUserPermission.length > 0
                        ? user.currentUserPermission.join(", ")
                        : "No permissions assigned"
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingUser === user.username ? (
                      <div>
                        <button
                          onClick={() => handleUpdateUser(user.username)}
                          className="text-green-600 hover:text-green-800 mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingUser(null)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingUser(user.username)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteUser(user.username)}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default useAuth(ManageUser);
