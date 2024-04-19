'use client'
import React, { useState } from "react";
import { CustomButton } from "@lib/components/custom";
import { Container , TextField } from "@lib";
import { postData } from "@lib/rest";
import { PageContainer, useLoading, useSnackbar } from "@lib/layout";
import { setCookie } from "@lib/utils";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const handleLogin = async () => {
    try {
      showLoading();
      const response = await postData("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      });
      console.log('Login Successful:', response);

      setCookie(response);
      enqueueSnackbar({
        message: 'LOGIN SUCCESS',
        variant: 'success'
      });
      router.push('/dashboard');
      hideLoading();
    } catch (error) {
      console.error('Error logging in:', error);
      hideLoading();
      router.push('/login');
      // Handle login error, e.g., display error message to user
    }
  };

  return (
    <PageContainer >
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
  );
};

export default LoginPage;
