// NoteContext.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";

const CONTENT_MAX = 1100; // <-- set this to the same numeric width you use for search/cards or use Container maxWidth="lg"

export default function NoteContext() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: CONTENT_MAX }, // full width on small screens, fixed on md+
            mx: "auto",                                   // center it inside page
            boxSizing: "border-box",
            background: "rgba(15,23,42,0.9)",
            borderRadius: "16px",
            border: "1px solid rgba(148,163,184,0.12)",
            boxShadow: "0 18px 45px rgba(15,23,42,0.75)",
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 3, sm: 4, md: 5 },
            color: "white",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "center" },
              gap: { xs: "12px", sm: "18px", md: "22px" },
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.1rem" },
              background: "linear-gradient(135deg,#c4b5fd,#8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1.5,
            }}
          >
            <NoteOutlinedIcon
              sx={{
                fontSize: { xs: 26, sm: 30, md: 34 },
                background: "inherit",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
            FocuZ Note
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              opacity: 0.9,
              fontWeight: 300,
              fontSize: { xs: ".85rem", sm: ".9rem", md: "1rem" },
              textAlign: { xs: "left", md: "center" },
              mx: { md: "auto" },

              /* THE IMPORTANT PART — let long strings wrap instead of expanding the container */
              whiteSpace: "normal",
              overflowWrap: "anywhere",  // modern, breaks anywhere if needed
              wordBreak: "break-word",   // fallback
              hyphens: "auto",
            }}
          >
            A simple and organized way to keep your notes and be in track
            {/* no unbroken string will expand the box now */}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
