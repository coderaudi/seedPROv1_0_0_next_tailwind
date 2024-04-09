"use client";
import { CustomButton } from "@lib/components/custom";
import React from "react";
import { redirect, useRouter } from "next/navigation";

const AccessDeniedPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center bg-white p-8 rounded shadow-md relative z-10">
        <h1 className="text-4xl font-bold text-red-600 mt-8">Access Denied</h1>
        <div className="flex justify-center">
          <span className="absolute top-5 text-9xl font-extrabold text-gray-400 opacity-30 z-0">
            403
          </span>
        </div>
        <p className="text-lg mt-8">
          Sorry, you don't have permission to access this page.
        </p>
        <CustomButton
          title="GO TO HOME"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default AccessDeniedPage;
