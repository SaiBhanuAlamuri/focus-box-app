import React, { Suspense, lazy } from "react";
import { Grid, Box } from "@mui/material";

const NoteCard = lazy(() => import("./NoteCards"));

export default function NotesGrid({
  notes,
  onArchive,
  onDelete,
  onView,
}) {
  if (!notes || notes.length === 0) return null;

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 3 }}
      justifyContent="center"
      alignItems="stretch"
      sx={{ width: "100%", mx: "auto" }}
    >
      {notes.map((note) => (
        <Grid
          item
          key={note.id}
          xs={12} 
          sm={6} 
          md={4} 
          lg={3}  
          xl={3}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  flexGrow: 1,
                  height: 180,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.05)",
                }}
              />
            }
          >
            <NoteCard
              note={note}
              onArchive={onArchive}
              onDelete={onDelete}
              onView={() => onView(note)}
            />
          </Suspense>
        </Grid>
      ))}
    </Grid>
  );
}
