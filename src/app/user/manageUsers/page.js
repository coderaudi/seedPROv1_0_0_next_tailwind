"use client";
import React, { useState, useEffect } from "react";
import { DashboardLayout, useAuth } from "@lib/layout";

const ManageUser = () => {
  // State to store users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for better UX
  const [error, setError] = useState(null); // State for error handling

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
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.username} className="border-b">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDeleteUser(user.username)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center px-4 py-2">
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
