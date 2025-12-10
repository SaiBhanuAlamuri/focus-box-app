// src/Template/Note.js
import React from "react";
import { Grid, Box } from "@mui/material";
import NotesHeader from "../components/NotesHeader";

export default function Note() {
  return (
    <Grid
      container
      direction="column"  
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
        padding: { xs: 2, md: 4 },
        color: "#f1f5f9",
      }}
    >
    
      <Grid item>
        <NotesHeader />
      </Grid>

   
      <Grid item sx={{ mt: 3 }}>
        <Box>Note content here...</Box>
      </Grid>
    </Grid>
  );
}
