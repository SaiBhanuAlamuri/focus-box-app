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
import { useTheme } from "@mui/material/styles";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import VisibilityIcon from "@mui/icons-material/Visibility";

function NoteCard({ note = {}, onArchive, onDelete, onView }) {
  const theme = useTheme();

  const handleView = useCallback(() => onView?.(note), [note, onView]);
  const handleArchive = useCallback(() => onArchive?.(note.id), [note.id, onArchive]);
  const handleDelete = useCallback(() => onDelete?.(note.id), [note.id, onDelete]);

  const isDeleted = note.status === "deleted";
  const isArchived = note.status === "archived";

  const statusLabel = useMemo(() => {
    if (isDeleted) return "DELETED";
    if (isArchived) return "ARCHIVED";
    return "ACTIVE";
  }, [isArchived, isDeleted]);

 
  const statusColor = useMemo(() => {
    if (isDeleted) return theme.palette.error.main;
    if (isArchived) return theme.palette.warning.main;
    return theme.palette.primary.main;
  }, [isArchived, isDeleted, theme]);

  const statusBg = useMemo(() => {

    if (isDeleted) return "rgba(248,113,113,0.15)";
    if (isArchived) return "rgba(250,204,21,0.15)";
    return "rgba(167,139,250,0.15)";
  }, [isArchived, isDeleted]);

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

        
        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

       
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 16px 30px rgba(2,6,23,0.5)"
            : "0 4px 16px rgba(0,0,0,0.08)",

        overflow: "hidden",
        borderLeft: `4px solid ${statusColor}`,
        transition: "all 0.25s ease",
      }}
    >
      <CardContent sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
          <Typography
            variant="subtitle1"
            noWrap
            sx={{
              fontWeight: 700,
           
              color: theme.palette.text.primary,
              fontSize: { xs: "1rem", sm: "1.05rem" },
              pr: 1,
            }}
          >
            {note.title || "Untitled"}
          </Typography>

          <Box
            sx={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: statusColor,
              py: "4px",
              px: "8px",
              borderRadius: "999px",
              background: statusBg,
            }}
          >
            {statusLabel}
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "0.82rem", sm: "0.9rem" },
       
            color: theme.palette.text.secondary,
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
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
         
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Button
            size="small"
            variant="text"
            onClick={handleView}
            startIcon={<VisibilityIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />}
            sx={{
              color: theme.palette.primary.main,
              textTransform: "none",
              pl: 0,
            }}
          >
            View
          </Button>

          <Typography sx={{ fontSize: "0.72rem", color: theme.palette.text.secondary, mt: 0.3 }}>
            Created: {createdAtLabel}
          </Typography>

          <Typography sx={{ fontSize: "0.64rem", color: theme.palette.text.disabled, mt: 0.4 }}>
            id: {note.id ?? "—"}
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.5} alignItems="center">
          {isDeleted ? (
            <IconButton size="small" onClick={handleDelete}>
              <RestoreFromTrashIcon sx={{ fontSize: 18, color: theme.palette.info.main }} />
            </IconButton>
          ) : (
            <>
              <IconButton size="small" onClick={handleArchive}>
                <ArchiveOutlinedIcon
                  sx={{
                    fontSize: 17,
              
                    color: isArchived
                      ? theme.palette.warning.main
                      : theme.palette.text.disabled,
                  }}
                />
              </IconButton>

              <IconButton size="small" onClick={handleDelete}>
                <DeleteOutlineIcon sx={{ fontSize: 17, color: theme.palette.error.main }} />
              </IconButton>
            </>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default memo(NoteCard);
