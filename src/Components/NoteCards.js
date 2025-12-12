import React, { memo, useCallback, useMemo } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  Button,
  Box,
} from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import VisibilityIcon from "@mui/icons-material/Visibility";


function NoteCard({ note = {}, onArchive, onDelete, onView }) {
  const handleView = useCallback(() => onView && onView(note), [note, onView]);
  const handleArchive = useCallback(() => onArchive && onArchive(note.id), [note.id, onArchive]);
  const handleDelete = useCallback(() => onDelete && onDelete(note.id), [note.id, onDelete]);

  const isDeleted = note.status === "deleted";
  const isArchived = note.status === "archived";

  // human-friendly status label and colours
  const statusLabel = useMemo(() => {
    if (isDeleted) return "DELETED";
    if (isArchived) return "ARCHIVED";
    return "ACTIVE";
  }, [isArchived, isDeleted]);

  const statusColor = useMemo(() => {
    if (isDeleted) return "#f87171"; // red
    if (isArchived) return "#facc15"; // amber
    return "#a78bfa"; // purple
  }, [isArchived, isDeleted]);

  // show created label using id (user requested)
  const createdAtLabel = useMemo(() => (note.id ? String(note.id) : "—"), [note.id]);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 300 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 200,
        borderRadius: 3,
        background: "rgba(17,24,39,0.92)",
        border: "1px solid rgba(148,163,184,0.12)",
        boxShadow: "0 16px 30px rgba(2,6,23,0.5)",
        overflow: "hidden",
        // left accent that follows status color for stronger visual cue
        borderLeft: `4px solid ${statusColor}`,
      }}
    >
      <CardContent sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
          <Typography
            variant="subtitle1"
            noWrap
            sx={{ fontWeight: 700, fontSize: { xs: "1rem", sm: "1.05rem" }, color: "#e6eef8", pr: 1 }}
          >
            {note.title || "Untitled"}
          </Typography>

          {/* status pill */}
          <Box
            component="span"
            sx={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: statusColor,
              py: "4px",
              px: "8px",
              borderRadius: "999px",
              background: isDeleted
                ? "rgba(248,113,113,0.15)"
                : isArchived
                ? "rgba(250,204,21,0.15)"
                : "rgba(167,139,250,0.15)",
            }}
          >
            {statusLabel}
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "0.82rem", sm: "0.9rem" },
            color: "rgba(173,181,189,0.9)",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {note.content || ""}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          px: { xs: 2, sm: 3 },
          py: 1,
          justifyContent: "space-between",
          borderTop: "1px solid rgba(100,116,139,0.06)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Button
            size="small"
            variant="text"
            sx={{ color: "#a78bfa", textTransform: "none", pl: 0 }}
            onClick={handleView}
            startIcon={<VisibilityIcon sx={{ fontSize: 16, color: "#a78bfa" }} />}
          >
            View
          </Button>

          {/* created label (uses id) */}
          <Typography sx={{ fontSize: "0.72rem", color: "rgba(148,163,184,0.9)", mt: 0.3 }}>
            Created: {createdAtLabel}
          </Typography>

          {/* show id plainly but small — useful for debugging or QA */}
          <Typography sx={{ fontSize: "0.64rem", color: "rgba(148,163,184,0.6)", mt: 0.4 }}>
            id: {note.id ?? "—"}
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.5} alignItems="center">
          {isDeleted ? (
            <IconButton size="small" onClick={handleDelete} title="Restore">
              <RestoreFromTrashIcon sx={{ fontSize: 18, color: "#60a5fa" }} />
            </IconButton>
          ) : (
            <>
              <IconButton
                size="small"
                onClick={handleArchive}
                title={isArchived ? "Unarchive" : "Archive"}
              >
                <ArchiveOutlinedIcon sx={{ fontSize: 17, color: isArchived ? "#facc15" : "#d1d5db" }} />
              </IconButton>

              <IconButton size="small" onClick={handleDelete} title="Delete">
                <DeleteOutlineIcon sx={{ fontSize: 17, color: "#f87171" }} />
              </IconButton>
            </>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default memo(NoteCard);
