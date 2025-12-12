
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";


import { useCustomTheme } from "../Theme/themeConfig";

export default function ThemeToggle({ size = "medium" }) {
  const { mode, toggleMode } = useCustomTheme();
  const next = mode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton
        aria-label={`Switch to ${next} mode`}
        size={size}
        onClick={toggleMode}
        sx={{ color: "inherit" }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
