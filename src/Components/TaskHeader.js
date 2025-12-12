
import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { useTheme as useMUITheme } from "@mui/material/styles";
import { useCustomTheme } from "../Theme/themeConfig"; 

export default function TaskManagerHeader() {
  const muiTheme = useMUITheme();
  const matchesSm = useMediaQuery(muiTheme.breakpoints.up("sm"));
  const { mode, toggleMode } = useCustomTheme();
  const isDark = mode === "dark";

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 10, lg: 15 },
        py: { xs: 1.5, sm: 2 },
        overflow: "hidden",
        background: "transparent",
      }}
    >
    
      <Grid item xs="auto" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(135deg, #a78bfa, #8b5cf6)",
            color: muiTheme.palette.getContrastText("#8b5cf6"),
            fontWeight: 700,
            fontSize: 18,
          }}
          aria-hidden
        >
          ✓
        </Box>

        <Typography
          noWrap
          sx={{
            fontSize: { xs: "1.05rem", sm: "1.25rem" },
            fontWeight: 600,
            color: "text.primary",
            ml: 0.5,
          }}
        >
          TaskFlow
        </Typography>
      </Grid>

    
      <Grid item xs="auto" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      
        <Box
          onClick={toggleMode}
          role="button"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMode();
          }}
          sx={{
            width: 56,
            height: 30,
            borderRadius: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            p: "3px",
            transition: "background 200ms ease, box-shadow 200ms ease",
            background: isDark
              ? `linear-gradient(135deg, ${muiTheme.palette.primary.dark}33, ${muiTheme.palette.primary.main}33)`
              : muiTheme.palette.action.hover,
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"}`,
            boxShadow: isDark ? `0 6px 18px ${muiTheme.palette.primary.main}20` : muiTheme.shadows[1],
            display: "flex",
            alignItems: "center",
            justifyContent: isDark ? "flex-start" : "flex-end",
          }}
        >
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: isDark ? muiTheme.palette.background.paper : muiTheme.palette.common.white,
              boxShadow: muiTheme.shadows[2],
              transition: "transform 220ms ease",
              transform: isDark ? "translateX(0)" : "translateX(0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? muiTheme.palette.primary.main : muiTheme.palette.text.primary,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </Box>
        </Box>

      
      </Grid>
    </Grid>
  );
}
