
import React, { useState, useEffect, useCallback, lazy, Suspense, useMemo } from "react";
import { Box, Grid, CircularProgress, Container } from "@mui/material";

import NotesHeader from "../components/NotesHeader";
import NoteContext from "../components/NoteContext";
import SearchFilterBar from "../components/NoteBar";
import ViewNoteDialog from "../components/ViewNoteDialog";

const NotesGrid = lazy(() => import("../components/NoteGrid"));

const STORAGE_KEY = "my_notes_LOCAL";

function normalizeNote(n) {
  return {
    id: n?.id ?? null,
    title: typeof n?.title === "string" ? n.title : "",
    content: typeof n?.content === "string" ? n.content : "",
    status: typeof n?.status === "string" ? n.status : "active",
    ...(n?.createdAt ? { createdAt: n.createdAt } : {}),
  };
}

export default function Note() {
  const [filter, setFilter] = useState("active");
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];

      return parsed.map(normalizeNote);
    } catch (e) {
      console.error("Failed to read notes from localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error("Failed to save notes to localStorage:", e);
    }
  }, [notes]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);

  const handleView = useCallback((note) => {
    setSelectedNote(note);
    setViewOpen(true);
  }, []);

  const handleNewNote = useCallback(() => {
    setSelectedNote({ id: null, title: "", content: "", status: "active" });
    setViewOpen(true);
  }, []);

  const handleCloseView = useCallback(() => {
    setViewOpen(false);
    setSelectedNote(null);
  }, []);

  const handleSaveNote = useCallback((payload) => {
    if (!payload) return;
    if (!payload.id) {
      const id = Date.now();
      const newNote = normalizeNote({ ...payload, id });
      setNotes((prev) => [newNote, ...prev]);
    } else {
      setNotes((prev) => prev.map((n) => (n.id === payload.id ? normalizeNote(payload) : n)));
    }
    setViewOpen(false);
    setSelectedNote(null);
    
  }, []);

  const handleArchive = useCallback((id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: n.status === "archived" ? "active" : "archived" } : n
      )
    );
  }, []);

  const handleDeleteOrRestore = useCallback((id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: n.status === "deleted" ? "active" : "deleted" } : n
      )
    );
  }, []);

  
  const filteredNotes = useMemo(() => {
    const q = (search || "").toLowerCase().trim();
    return notes.filter((note) => {
      const matchesFilter = filter === "all" || note.status === filter;
      if (!matchesFilter) return false;
      if (!q) return true;
      const title = (note.title || "").toLowerCase();
      const content = (note.content || "").toLowerCase();
      return title.includes(q) || content.includes(q);
    });
  }, [notes, filter, search]);

  return (
    <Grid
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
        overflowX: "hidden",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, color: "#f1f5f9" }}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <NotesHeader />
          </Grid>

          <Grid item>
            <NoteContext />
          </Grid>

          <Grid item>
            <SearchFilterBar
              filter={filter}
              onFilterChange={setFilter}
              search={search}
              onSearchChange={setSearch}
              onNewNote={handleNewNote}
            />
          </Grid>

          <Grid item>
            <Suspense
              fallback={
                <Box sx={{ py: 6, display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </Box>
              }
            >
              <NotesGrid
                notes={filteredNotes}
                onArchive={handleArchive}
                onDelete={handleDeleteOrRestore}
                onView={handleView}
              />
            </Suspense>
          </Grid>
        </Grid>
      </Container>

      <ViewNoteDialog open={viewOpen} note={selectedNote} onClose={handleCloseView} onSave={handleSaveNote} />
    </Grid>
  );
}
