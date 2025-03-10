"use client";
import React, { useState, useEffect } from "react";
import { DashboardLayout, useAuth } from "@lib/layout";

const UserList = () => {
  // State to store users
  const [users, setUsers] = useState([]);

  // Fetch users from localStorage on page load
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("seedPro_usersList")) || [];
    setUsers(storedUsers);
  }, []);

  // Handle user deletion
  const handleDeleteUser = (username) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    // Update the state and localStorage after deletion
    setUsers(updatedUsers);
    localStorage.setItem("seedPro_usersList", JSON.stringify(updatedUsers));
  };

  return (
    <DashboardLayout pageName={"User List"}>
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

export default useAuth(UserList);
