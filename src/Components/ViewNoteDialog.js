
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from "@mui/material";

export default function ViewNoteDialog({ open, note, onClose, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ id: null, title: "", content: "", status: "active" });

  useEffect(() => {
    if (note) {
      setDraft({ id: note.id ?? null, title: note.title ?? "", content: note.content ?? "", status: note.status ?? "active" });
      setIsEditing(!note.id); 
    } else {
      setDraft({ id: null, title: "", content: "", status: "active" });
      setIsEditing(true);
    }
  }, [note]);

  const handleSave = () => {
  
    if (!draft.title.trim() && !draft.content.trim()) {
      
      return;
    }
    onSave && onSave(draft);
  };

  if (!open) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" sx={{ "& .MuiPaper-root": { borderRadius: 4 } }}>
      <DialogTitle>{isEditing ? (draft.id ? "Edit Note" : "New Note") : "View Note"}</DialogTitle>

      <DialogContent dividers>
        {isEditing ? (
          <>
            <TextField label="Title" fullWidth margin="dense" value={draft.title} onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))} />
            <TextField label="Content" fullWidth multiline rows={8} margin="dense" value={draft.content} onChange={(e) => setDraft((d) => ({ ...d, content: e.target.value }))} />
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ mb: 1 }}>{draft.title}</Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>{draft.content}</Typography>
          </>
        )}
      </DialogContent>

      <DialogActions>
        {isEditing ? (
          <>
            <Button onClick={() => { setIsEditing(false); /* discard changes by re-syncing from prop */ setDraft({ id: note?.id ?? null, title: note?.title ?? "", content: note?.content ?? "", status: note?.status ?? "active" }); }}>Cancel</Button>
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </>
        ) : (
          <>
            <Button onClick={onClose}>Close</Button>
            <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
