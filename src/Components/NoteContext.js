
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";

const CONTENT_MAX = 1100; 

export default function NoteContext() {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          maxWidth: CONTENT_MAX,
          mx: "auto",
          textAlign: { xs: "left", md: "center" },
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        {/* TITLE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "flex-start", md: "center" },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            mb: 1.2,
            flexWrap: "nowrap",
          }}
        >
          <NoteOutlinedIcon
            sx={{
              fontSize: { xs: 28, sm: 32, md: 36 },
              background: "linear-gradient(135deg,#c4b5fd,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.3rem" },
              background: "linear-gradient(135deg,#c4b5fd,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "normal",
              overflowWrap: "anywhere",
            }}
          >
            FocuZ Note
          </Typography>
        </Box>

       
        <Typography
          sx={{
            opacity: 0.85,
            fontWeight: 300,
            fontSize: { xs: ".85rem", sm: ".95rem", md: "1.05rem" },
            maxWidth: 800,
            mx: { xs: 0, md: "auto" },
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            lineHeight: 1.5,
          }}
        >
          A simple and organized way to keep your notes and be in track
        </Typography>
      </Grid>
    </Grid>
  );
}
