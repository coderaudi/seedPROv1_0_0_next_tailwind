"use client";
import React, { useState, useEffect } from "react";
import { CustomButton } from "@lib/components/custom";
import { TextField } from "@lib";
import { postData } from "@lib/rest";
import { CardContainer, PageContainer, useSnackbar } from "@lib/layout";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      push("/login"); // Redirect if already logged in
    }
  }, [push]);

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await postData("https://dummyjson.com/auth/register", {
        username,
        password,
      });
      console.log("Registration Successful:", response);

      enqueueSnackbar({
        message: "REGISTRATION SUCCESS",
        variant: "success",
      });
      push("/login");
    } catch (error) {
      console.error("Error registering:", error);
      enqueueSnackbar({
        message: error.message || "Error registering",
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
