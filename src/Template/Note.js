

import React, { useState, lazy, Suspense } from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import Container from "@mui/material/Container";
import NotesHeader from "../components/NotesHeader";
import NoteContext from "../components/NoteContext";
import SearchFilterBar from "../components/NoteBar";
import NewNoteDialog from "../components/NewNoteDialog";

//
const NotesGrid = lazy(() => import("../components/NoteGrid"));

export default function Note() {
  const [filter, setFilter] = useState("active");
  const [search, setSearch] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Frontend cleanup",
      content: "Refactor notes layout, add hero gradient.",
      status: "active",
    },
    {
      id: 2,
      title: "API ideas",
      content: "Design endpoints for notes CRUD, auth, and filters.",
      status: "archived",
    },
    {
      id: 3,
      title: "Learning plan",
      content: "Deep dive React, MUI Grid, theming, and context.",
      status: "active",
    },
    {
      id: 4,
      title: "Trash example",
      content: "This note is in deleted state for UI testing.",
      status: "deleted",
    },
  ]);

  const openNewNoteDialog = () => setDialogOpen(true);
  const closeNewNoteDialog = () => setDialogOpen(false);

  const handleCreateNote = (notePayload) => {
    const id = Date.now();
    const newNote = {
      id,
      ...notePayload,
    };

    setNotes((prev) => [newNote, ...prev]);
    setFilter("active");
  };

  const handleArchive = (id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: n.status === "archived" ? "active" : "archived" } : n
      )
    );
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, status: "deleted" } : n)));
  };

  const handleEdit = (id) => {
    console.log("Edit note", id);
  };

  const filteredNotes = notes.filter((note) => {
    const matchesFilter = filter === "all" || note.status === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q || note.title.toLowerCase().includes(q) || note.content.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
        overflowX: "hidden", // kills sideways scroll from shadows
      }}
    >
      {/* Page-level Container: this is the authoritative centered width */}
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // side padding
          py: { xs: 2, md: 4 },
          color: "#f1f5f9",
        }}
      >
        <Grid container direction="column" spacing={4}>
          {/* HEADER */}
          <Grid item>
            <NotesHeader />
          </Grid>

          {/* HERO SECTION */}
          <Grid item sx={{ mt: 0 }}>
            <NoteContext />
          </Grid>

          {/* SEARCH + FILTER BAR */}
          <Grid item sx={{ mt: 0 }}>
            <SearchFilterBar
              filter={filter}
              onFilterChange={setFilter}
              search={search}
              onSearchChange={setSearch}
              onNewNote={openNewNoteDialog} // opens modal when + New Note clicked
            />
          </Grid>

          NOTES GRID
          <Grid item sx={{ mt: 0, mb: 2 }}>
            <Suspense
              fallback={
                <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
                  <CircularProgress color="inherit" />
                </Box>
              }
            >
              <NotesGrid
                notes={filteredNotes}
                onArchive={handleArchive}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </Suspense>
          </Grid>
        </Grid>
      </Container>

      {/* NEW NOTE DIALOG */}
      <NewNoteDialog
        open={isDialogOpen}
        onClose={closeNewNoteDialog}
        onSave={handleCreateNote}
      />
    </Box>
  );
}
