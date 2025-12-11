import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NotesHeader = ({ title = "Focuz Note" }) => {
  const [dark, setDark] = useState(true);

  const handleToggle = () => {
    setDark(!dark);
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: { xs: `12`, md: 6 } }}
    >
      <Grid item>
        <Grid container spacing={1.5} alignItems="center">
          <Grid item>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at 20% 20%, #a855f7, #4f46e5)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              }}
            >
              <NoteOutlinedIcon sx={{ fontSize: 20, color: "#fff" }} />
            </Box>
          </Grid>

          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#f9fafb" }}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <IconButton
          onClick={handleToggle}
          sx={{
            width: 54,
            height: 28,
            borderRadius: 999,
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(129,140,248,0.65))",
            boxShadow: "0 0 18px rgba(168,85,247,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: dark ? "flex-start" : "flex-end",
            px: 0.5,
            transition: "0.3s",
          }}
        >
          {dark ? (
            <Brightness4Icon sx={{ fontSize: 18, color: "#fff" }} />
          ) : (
            <Brightness7Icon sx={{ fontSize: 18, color: "#fff" }} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotesHeader;
