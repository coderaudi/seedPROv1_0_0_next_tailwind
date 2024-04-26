"use client";
import React, { useEffect, useState } from "react";
import { CustomButton } from "@lib/components/custom";
import { Container, TextField } from "@lib";
import { postData } from "@lib/rest";
import {
  PageContainer,
  useLoading,
  useSnackbar,
  CustomLoading,
} from "@lib/layout";
import { getCookie, setCookie } from "@lib/utils";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const _cookies = getCookie();
  const { push } = useRouter();
  const { showLoading, hideLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    if (_cookies && _cookies.username) {
      push("/dashboard");
    } else {
      setShowLoginForm(true);
    }
  }, [_cookies]);

  const handleLogin = async () => {
    try {
      setAuthenticating(true);
      showLoading();
      const response = await postData("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });
      console.log("Login Successful:", response);

      setCookie(response);
      enqueueSnackbar({
        message: "LOGIN SUCCESS",
        variant: "success",
      });
      push("/dashboard");
      hideLoading();
    } catch (error) {
      console.error("Error logging in:", error);
      hideLoading();
      push("/login");
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div>
      {showLoginForm ? (
        <PageContainer>
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              <CustomButton title="Demo Login" onClick={handleLogin} />
            </div>
          </div>
        </PageContainer>
      ) : (
        <CustomLoading
          loading={true}
          loadingIcon={"cached"}
          loadingMessage="Loading..."
        />
      )}
    </div>
  );
};

export default LoginPage;
