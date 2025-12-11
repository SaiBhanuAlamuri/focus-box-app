import React, { memo, useCallback } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import VisibilityIcon from "@mui/icons-material/Visibility";

function NoteCard({ note, onArchive, onDelete, onView }) {
  const handleView = useCallback(() => onView && onView(note), [note, onView]);
  const handleArchive = useCallback(
    () => onArchive && onArchive(note.id),
    [note.id, onArchive]
  );
  const handleDelete = useCallback(
    () => onDelete && onDelete(note.id),
    [note.id, onDelete]
  );

  const isDeleted = note.status === "deleted";
  const isArchived = note.status === "archived";

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 200,
        borderRadius: 3,
        background: "rgba(17,24,39,0.92)",
        border: "1px solid rgba(148,163,184,0.12)",
        boxShadow: "0 16px 30px rgba(2,6,23,0.5)",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}
      >
        <Typography
          variant="subtitle1"
          noWrap
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.05rem" },
            color: "#e6eef8",
            mb: 1,
          }}
        >
          {note.title || "Untitled"}
        </Typography>

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
        <Button
          size="small"
          variant="text"
          sx={{ color: "#a78bfa", textTransform: "none" }}
          onClick={handleView}
        >
          View
        </Button>

        <Stack direction="row" spacing={0.5}>
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
                <ArchiveOutlinedIcon
                  sx={{
                    fontSize: 17,
                    color: isArchived ? "#facc15" : "#d1d5db",
                  }}
                />
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
