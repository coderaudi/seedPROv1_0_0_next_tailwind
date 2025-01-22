"use client";
import React, { useState, useEffect } from "react";
import { CustomButton } from "@lib/components/custom";
import { TextField } from "@lib";
import { CardContainer, PageContainer, useSnackbar } from "@lib/layout";
import { useRouter } from "next/navigation";

// Define a constant for seed users list
const seedPro_usersList = [
  { username: "admin", password: "admin123", email: "admin@example.com" },
  { username: "user1", password: "user123", email: "user1@example.com" },
  { username: "user2", password: "user456", email: "user2@example.com" },
];

const RegisterPage = () => {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Initialize the users list in localStorage if it's not already set
    if (!localStorage.getItem("seedPro_usersList")) {
      localStorage.setItem("seedPro_usersList", JSON.stringify(seedPro_usersList));
    }
  }, [push]);

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        throw new Error("Invalid email address");
      }

      // Fetch existing users from localStorage
      const users = JSON.parse(localStorage.getItem("seedPro_usersList")) || [];

      // Check if the username or email already exists
      const existingUser = users.find(user => user.username === username || user.email === email);
      if (existingUser) {
        throw new Error("Username or email already exists");
      }

      // Create a new user object
      const newUser = { username, password, email };

      // Add new user to the list of users
      users.push(newUser);

      // Save the updated users list back to localStorage
      localStorage.setItem("seedPro_usersList", JSON.stringify(users));

      // Optionally store that the user is logged in (for immediate use)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      // Show success notification
      enqueueSnackbar({
        message: "Registration successful!",
        variant: "success",
      });

      // Redirect to login page after registration
      push("/login");
    } catch (error) {
      console.error("Error registering:", error);
      enqueueSnackbar({
        message: error.message || "An error occurred during registration",
        variant: "error",
      });
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side Image (optional) */}
        <div className="hidden lg:block lg:w-6/12 bg-gray-200">
          <img
            className="w-full h-auto object-cover"
            src="https://media.istockphoto.com/id/1366521811/vector/business-launch.jpg?s=612x612&w=0&k=20&c=KNgk6CQAXdxFzDMVvM2oEw8AmVVpPsnn-e7d8TPBaMI="
            alt="Registration background image"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-4/12 p-8 mx-auto mt-8">
          <CardContainer>
            <div className="rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <TextField
                  color="primary"
                  focused
                  id="username"
                  label="Username"
                  variant="outlined"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-6">
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="text-center">
                <CustomButton title="Register" onClick={handleRegister} />
              </div>
              {/* Login Link */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500 underline">
                    Login here
                  </a>
                </span>
              </div>
            </div>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
