import { Box, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";

export default function TaskManagerHeader() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
         px: { xs: 2, sm: 4, md: 10, lg: 15 },
        
        py: 2,
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          height: 60,
          display: "flex",
          alignItems: "center",

          gap: 1,
        }}
      >
        <Box
          sx={{
            width: "32px",
            height: "32px",
            background: "linear-gradient(135deg, #a78bfa, rgba(139, 92, 246, 1))",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            fontSize: "20px",

            fontWeight: "600",
            color: "white",
          }}
        >
          {" "}
          ✓
        </Box>

        <Typography
          sx={{
            fontSize:{xs: "1.2rem", sm: "1.5rem" },
            fontWeight: "500",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          TaskFlow
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          onClick={toggleTheme}
          sx={{
            width: "55px",
            height: "28px",
            position: "relative",
            cursor: "pointer",
            borderRadius: "20px",
            transition: "all 0.35s ease",

           
            background: darkMode
              ? "linear-gradient(135deg, rgba(140, 120, 230, 0.6), rgba(90, 70, 190, 0.4))"
              : "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(230,240,255,0.6))",

            backdropFilter: "blur(8px)",

         
            border: darkMode
              ? "2px solid rgba(170,140,255,0.8)"
              : "2px solid rgba(180,200,255,0.6)",

            boxShadow: darkMode
              ? "0 0 12px rgba(150,110,255,0.8)"
              : "0 0 10px rgba(190,220,255,0.7)",
          }}
        ></Box>

        <Box
          onClick={toggleTheme}
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            position: "relative",
            backgroundColor: darkMode ? "#f4f5f8ff" : "#111010ff",

            left: darkMode ? "-25px" : "-49px",
            transition: "0.3s",
          }}
        ></Box>
      </Grid>
    </Grid>



  );
}
