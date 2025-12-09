import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function NavActions() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Box
        onClick={toggleTheme}
        sx={{
          width: "50px",
          height: "26px",
          borderRadius: "13px",
          cursor: "pointer",
          position: "relative",
          background: darkMode
            ? "rgba(241, 243, 238, 0.99)"
            : "rgba(255, 255, 255, 0.1)",
          border: darkMode
            ? "1px solid rgba(252, 237, 237, 1)"
            : "1px solid rgba(243, 229, 229, 0.2)",
          transition: ".3s",
        }}
      >
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: "3px",
            background: darkMode ? "#111010ff" : "#f4f5f8ff",
            transform: darkMode ? "translateX(0)" : "translateX(24px)",
            transition: ".3s",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
          }}
        />
      </Box>

      <Button
        variant="text"
        sx={{
          fontWeight: 500,
          fontSize: ".95rem",
          color: "inherit",
          px: "1.5rem",
          py: ".6rem",
          borderRadius: "8px",
          color: "white",
          //    background: "rgba(219, 211, 174, 0.7)",
          transition: ".3s",
          border: "2px solid rgba(167,139,250,0.4)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(45, 42, 56, 0.4)",
            background: "rgba(167,139,250,0.4)",
          },
        }}
      >
        Log in
      </Button>

      <Button
        sx={{
          fontWeight: 600,
          fontSize: ".95rem",
          px: "1.5rem",
          py: ".6rem",
          borderRadius: "8px",
          color: "white",
          background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
          transition: ".3s",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(167,139,250,0.4)",
          },
        }}
      >
        Contact us
      </Button>
    </Box>
  );
}
