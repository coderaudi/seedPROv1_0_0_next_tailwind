"use client";
import {  DashboardLayout, MYPieChart } from "@lib/layout";

const MYAPP = () => {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  return (
    <>
      <DashboardLayout>
        <MYPieChart />
      </DashboardLayout>
    </>
  );
};

export default MYAPP;
