'use client';
import React from "react";
import { CustomButton } from "@lib/components/custom";
import { Container , Box } from "@lib";
import { postData } from "@lib/rest";
import { useLoading, useSnackbar } from "@lib/layout";
import { getCookie, setCookie, } from "@lib/utils";
import { useRouter } from "next/navigation";



const LoginPage = () => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = async () => {
    try {
      showLoading();
      const response = await postData("https://dummyjson.com/auth/login", {
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional, defaults to 60
      });
      console.log('Login Successful:', response);

      setCookie(response)
      enqueueSnackbar({
        message: 'LOGIN SUCCESS',
        variant: 'success'
      });
      router.push('/dashboard')
      hideLoading();
    } catch (error) {
      console.error('Error logging in:', error);
      hideLoading();
      router.push('/login')

      // Handle login error, e.g., display error message to user
    }
  };


  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
      <CustomButton title="Demo Login" onClick={handleLogin} />
      <Container className="mt-10">
        <CustomButton title="Get Cookies" onClick={() => {
          const _ccc = getCookie()
          console.log("_ccc", _ccc)
        }} />

        
      </Container>

      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
    </div>
  );
};

export default LoginPage;
