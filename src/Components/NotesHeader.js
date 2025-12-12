import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NotesHeader = ({ title = "FocuZ Note" }) => {
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
      sx={{
        mb: { xs: 2, sm: 3, md: 4 },
        flexWrap: "wrap",   
        rowGap: { xs: 1.5, sm: 0 }
      }}
    >

      <Grid item sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: { xs: 30, sm: 34 },
            height: { xs: 30, sm: 34 },
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle at 20% 20%, #a855f7, #4f46e5)",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
            flexShrink: 0     
          }}
        >
          <NoteOutlinedIcon sx={{ fontSize: { xs: 18, sm: 20 }, color: "#fff" }} />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#f9fafb",
            fontSize: { xs: "1.05rem", sm: "1.25rem" },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: { xs: "160px", sm: "100%" }
          }}
        >
          {title}
        </Typography>
      </Grid>


      <Grid item>
        <IconButton
          onClick={handleToggle}
          sx={{
            width: { xs: 46, sm: 54 },
            height: { xs: 24, sm: 28 },
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
            <Brightness4Icon sx={{ fontSize: { xs: 15, sm: 18 }, color: "#fff" }} />
          ) : (
            <Brightness7Icon sx={{ fontSize: { xs: 15, sm: 18 }, color: "#fff" }} />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotesHeader;
