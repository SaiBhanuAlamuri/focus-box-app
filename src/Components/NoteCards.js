import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function NoteCard({ note, onArchive, onDelete, onEdit }) {
  return (
    <Card
      sx={{
          flexGrow: 1,
        width: "100%",                 // 🔑 fill the Grid cell
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        background: "rgba(17,24,39,0.92)",
        border: "1px solid rgba(148,163,184,0.25)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
          borderColor: "rgba(168,85,247,0.6)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" }, // responsive text
            mb: 1,
            color: "#e2e8f0",
            lineHeight: 1.2,
          }}
        >
          {note.title || "Untitled Note"}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.85rem" },
            lineHeight: 1.4,
            color: "rgba(173,181,189,0.9)",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {note.content || "No content yet..."}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          px: { xs: 2, sm: 3 },
          py: 1.1,
          justifyContent: "space-between",
          borderTop: "1px solid rgba(100,116,139,0.3)",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: ".05em",
            color:
              note.status === "active"
                ? "#a78bfa"
                : note.status === "archived"
                ? "#facc15"
                : "#ef4444",
          }}
        >
          {note.status}
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <IconButton size="small" onClick={() => onEdit(note.id)}>
            <EditNoteIcon sx={{ fontSize: 18, color: "#cbd5e1" }} />
          </IconButton>

          <IconButton size="small" onClick={() => onArchive(note.id)}>
            <ArchiveOutlinedIcon sx={{ fontSize: 17, color: "#d1d5db" }} />
          </IconButton>

          <IconButton size="small" onClick={() => onDelete(note.id)}>
            <DeleteOutlineIcon sx={{ fontSize: 17, color: "#f87171" }} />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
