import React, { Suspense, lazy } from "react";
import { Grid, Box } from "@mui/material";

// Lazy load NoteCard – loads only when needed
const NoteCard = lazy(() => import("./NoteCards"));

export default function NotesGrid({ notes, onArchive, onDelete, onEdit }) {
  if (!notes || notes.length === 0) return null;

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 3 }}
      alignItems="stretch"
      justifyContent="flex-start"
    >
      {notes.map((note) => (
        <Grid
          item
          key={note.id}
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          sx={{ display: "flex" }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  width: "100%",
                  height: 140,
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
              onEdit={onEdit}
            />
          </Suspense>
        </Grid>
      ))}
    </Grid>
  );
}
