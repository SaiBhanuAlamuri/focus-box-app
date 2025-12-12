
import React from "react";
import { Box, Typography, Chip, Button, Stack, useTheme } from "@mui/material";

export default function TaskCard({ task, onEdit, onComplete, onDelete, onRestore }) {
  const theme = useTheme();
  const palette = theme.palette;


  const gradients = {
    "in-progress": `linear-gradient(135deg, ${palette.primary.light || "#c4b5fd"}, ${palette.primary.main || "#a78bfa"})`,
    completed: `linear-gradient(135deg, ${palette.success.light || "#86efac"}, ${palette.success.main || "#22c55e"})`,
    deleted: `linear-gradient(135deg, ${palette.error.light || "#fca5a5"}, ${palette.error.main || "#ef4444"})`,
  };


  const chipTextColor = (status) => {

    if (status === "in-progress") return palette.getContrastText(palette.primary.main);
    if (status === "completed") return palette.getContrastText(palette.success.main);
    if (status === "deleted") return palette.getContrastText(palette.error.main);
    return palette.text.primary;
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 340,
        minWidth: { xs: "100%", sm: 260 },
        minHeight: 220,
        p: { xs: 2, md: 2.5 },
        borderRadius: 2,
        bgcolor: palette.background.paper,
        border: `1px solid ${theme.palette.mode === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)"}`,
        backdropFilter: "blur(6px)",
        boxShadow: theme.shadows[2],
        transition: "transform 220ms ease, box-shadow 220ms ease",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: theme.shadows[6],
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: gradients["in-progress"], 
        },
      }}
    >

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mb: 1, alignItems: "flex-start", flexWrap: "wrap" }}>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.05rem" },
            fontWeight: 700,
            color: palette.text.primary,
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          title={task.title}
        >
          {task.title || "Untitled"}
        </Typography>

        <Chip
          label={(task.status || "in-progress").replace("-", " ")}
          sx={{
            background: gradients[task.status] || gradients["in-progress"],
            color: chipTextColor(task.status),
            fontWeight: 700,
            textTransform: "capitalize",
            height: 28,
            ml: 1,
          }}
          size="small"
        />
      </Box>

    
      <Typography
        sx={{
          color: palette.text.secondary,
          fontSize: { xs: "0.9rem", sm: "0.95rem" },
          lineHeight: 1.4,
          mb: 1.5,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {task.description || "No description"}
      </Typography>

      
      <Typography sx={{ fontSize: "0.8rem", color: palette.text.secondary, mb: 2 }}>
        Created: {task.createdAt}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mt: "auto", flexWrap: "wrap" }}>
        {task.status !== "deleted" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onEdit(task.id)}
            sx={{
              borderColor: palette.mode === "light" ? palette.primary.main : "rgba(255,255,255,0.06)",
              color: palette.primary.main,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: palette.action.hover,
              },
            }}
          >
            Edit
          </Button>
        )}

        {task.status === "in-progress" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onComplete(task.id)}
            sx={{
              borderColor: palette.success.main,
              color: palette.success.main,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: "rgba(34,197,94,0.06)",
              },
            }}
          >
            Complete
          </Button>
        )}

        {task.status !== "deleted" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onDelete(task.id)}
            sx={{
              borderColor: palette.error.main,
              color: palette.error.main,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: "rgba(239,68,68,0.06)",
              },
            }}
          >
            Delete
          </Button>
        )}

        {task.status === "deleted" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onRestore(task.id)}
            sx={{
              borderColor: palette.text.secondary,
              color: palette.text.secondary,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: palette.action.hover,
              },
            }}
          >
            Restore
          </Button>
        )}
      </Stack>
    </Box>
  );
}
