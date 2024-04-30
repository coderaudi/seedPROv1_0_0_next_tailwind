import React from "react";
import { useTheme } from "@lib/layout";

const CustomTile = ({ title, description, icon, value }) => {
  const theme = useTheme();

  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${theme.custom.tile.primary}, ${theme.custom.tile.secondary})`,
  };

  return (
    <div
      className="w-60 h-28 flex items-center justify-center rounded-xl shadow-lg"
      style={gradientStyle}
    >
      <div className="justify-start">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-lg text-gray-200">{value}</p>
      </div>
      <div className="items-center justify-end pl-10">{icon}</div>
    </div>
  );
};

export default CustomTile;
