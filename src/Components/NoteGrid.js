import React, { Suspense, lazy } from "react";
import { Grid, Box } from "@mui/material";

const NoteCard = lazy(() => import("./NoteCards"));

export default function NotesGrid({
  notes,
  onArchive,
  onDelete,
  onView,   // <- correct & required
}) {
  if (!notes || notes.length === 0) return null;

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 3 }}
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{ width: "100%", mx: "auto" }}
    >
      {notes.map((note) => (
        <Grid
          item
          key={note.id}
          xs={12}     // 1 per row on mobile
          sm={6}      // 2 per row on small screens
          md={4}      // 3 per row on tablets
          lg={3}      // 4 per row desktop
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
              onView={() => onView(note)}  // 🔥 Correct passing of note object
            />
          </Suspense>
        </Grid>
      ))}
    </Grid>
  );
}
