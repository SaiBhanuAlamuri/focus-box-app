import { Button, Box, Typography, Stack } from "@mui/material";
import { items } from "../Utlis/HeaderData";
import NavActions from "./NavRight";
import { useState } from "react";

export default function Learn() {
  const [darkMode, setDarkMode] = useState(true);

  const toggletheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // height: "100vh",
          gap: 2,
          width: "100% ",
          height: "15%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "50%",
            width: "30%",
            backgroundColor: "rgba(37, 37, 49, 0.4)",
            borderRadius: 20,
            marginLeft: 9,
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Heading Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "35%",
              height: "90%",
              marginLeft: 5,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "35px",
                height: "35px",
                background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
                borderRadius: 1,
                fontSize: "20px",
              }}
            >
              ⚡
            </Box>
            <Typography
              gap={2}
              sx={{
                color: "white",
                fontSize: "22px",
                marginLeft: 2,
                fontWeight: "600",
              }}
            >
              FocusPanel
            </Typography>
          </Box>

          <Stack spacing={2} direction="row" sx={{ marginLeft: 2 }}>
            {items.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#e4ddddff",
                  opacity: 0.8,
                  transition: "0.3s",
                  fontSize: "15px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "30%",
            marginLeft: 40,
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <NavActions />
        </Box>
      </Box>
    </>
  );
}
