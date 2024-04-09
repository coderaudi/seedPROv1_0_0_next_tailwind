"use client";
import { ThemeProvider, DashboardLayout, MYPieChart } from "@lib/layout";

const MYAPP = () => {
  const data = [
    { value: 5, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];

  return (
    <ThemeProvider>
      <DashboardLayout>
        <MYPieChart />
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default MYAPP;
