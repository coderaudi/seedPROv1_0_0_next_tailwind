"use client";
import React, { useEffect, useState } from "react";
import { CustomButton } from "@lib/components/custom";
import { TextField } from "@lib";
import { CardContainer, useSnackbar, CustomLoading } from "@lib/layout";
import { getCookie, setCookie } from "@lib/utils";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const _cookies = getCookie();
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    if (_cookies && _cookies.username) {
      push("/dashboard");
    } else {
      setShowLoginForm(true);
      // Prevent scrolling on the login page
      document.body.style.overflowY = "hidden";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [_cookies, push]);

  const handleLogin = async () => {
    try {
      setAuthenticating(true);

      // Get the users from localStorage
      const users = JSON.parse(localStorage.getItem("seedPro_usersList")) || [];

      // Find the user with matching username and password
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!user) {
        throw new Error("Invalid username or password");
      }

      console.log("Login Successful:", user);

      // Store the user info in cookies or localStorage
      setCookie({
        username: user.username,
        currentUserPermission: user.currentUserPermission || [], // Get the permissions from the user object
      });
      enqueueSnackbar({
        message: "Login successful",
        variant: "success",
      });

      // Redirect to the dashboard
      push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      enqueueSnackbar({
        message: error.message || "An error occurred while logging in",
        variant: "error",
      });
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <>
      {showLoginForm ? (
        <div className="flex h-screen overflow-hidden">
          <div className="hidden lg:block lg:w-8/12 bg-gray-200">
            <img
              className="w-full h-auto object-cover"
              src="https://media.istockphoto.com/id/1366521811/vector/business-launch.jpg?s=612x612&w=0&k=20&c=KNgk6CQAXdxFzDMVvM2oEw8AmVVpPsnn-e7d8TPBaMI="
              alt="Tech background image"
            />
          </div>
          <div className="w-full lg:w-4/12 p-8 flex items-center justify-center">
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
                <div className="mb-6">
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
                <div className="text-center">
                  <CustomButton
                    title={authenticating ? "Logging in..." : "Login"}
                    onClick={handleLogin}
                    disabled={authenticating}
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 underline">
                      Register here
                    </a>
                  </span>
                </div>
              </div>
            </CardContainer>
          </div>
        </div>
      ) : (
        <CustomLoading
          loading={true}
          loadingIcon={"cached"}
          loadingMessage="Loading..."
        />
      )}
    </>
  );
};

export default LoginPage;
