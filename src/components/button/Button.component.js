"use client";
import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ title, variant = "contained", onClick, ...props }) => {
  return (
    <Button variant={variant} color="primary" {...props} onClick={onClick}>
      {title}
    </Button>
  );
};

export default CustomButton;
