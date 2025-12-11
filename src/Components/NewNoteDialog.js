import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function NewNoteDialog({
  open,
  onClose,
  onSave,
  defaultStatus = "active",
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (open) {
      setTitle("");
      setContent("");
    }
  }, [open]);

  const handleSave = () => {
    if (!title.trim()) return;

    const newNote = {
      title: title.trim(),
      content: content.trim(),
      status: defaultStatus,
      createdAt: Date.now(),
    };
    onSave(newNote);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 2.5,
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Create Note
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ color: "text.primary" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ pt: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Box
            component="label"
            sx={{
              display: "block",
              mb: 1,
              fontSize: ".9rem",
              color: "text.secondary",
            }}
          >
            Title
          </Box>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            inputProps={{ maxLength: 120 }}
          />
        </Box>

        <Box>
          <Box
            component="label"
            sx={{
              display: "block",
              mb: 1,
              fontSize: ".9rem",
              color: "text.secondary",
            }}
          >
            Content
          </Box>
          <TextField
            fullWidth
            multiline
            minRows={6}
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            inputProps={{ maxLength: 2000 }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ textTransform: "none", borderRadius: 3 }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          disabled={!title.trim()}
          sx={{
            textTransform: "none",
            borderRadius: 3,
            background: "linear-gradient(135deg,#c4b5fd,#a78bfa)",
            color: "#020617",
            boxShadow: "0 12px 32px rgba(167,139,250,0.9)",
            "&:disabled": { opacity: 0.5, boxShadow: "none" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
