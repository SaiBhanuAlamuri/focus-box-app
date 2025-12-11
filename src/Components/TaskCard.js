import { Box, Typography, Chip, Button, Stack } from "@mui/material";

export default function TaskCard({
  task,
  onEdit,
  onComplete,
  onDelete,
  onRestore,
}) {
  const statusColors = {
    "in-progress": "linear-gradient(135deg,#a78bfa,#c4b5fd)",
    completed: "linear-gradient(135deg,#4ade80,#22c55e)",
    deleted: "linear-gradient(135deg,#f87171,#ef4444)",
  };

  return (
    <Box
      sx={{
        width: "300px",
        minHeight: "200px",
        maxWidth: "400px", // Prevents card from stretching based on description
        p: 2.5,
        borderRadius: "16px",
        background: "rgba(37,37,49,0.4)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(167, 139, 250, 0.3)",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)",
        },
      }}
    >
      {/* TITLE & STATUS - Reduced spacing */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
          mb: 1.5, // Reduced from previous spacing
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
            wordBreak: "break-word",
            flex: 1,
          }}
        >
          {task.title}
        </Typography>

        <Chip
          label={task.status.replace("-", " ")}
          sx={{
            background: statusColors[task.status],
            color: "black",
            fontWeight: 600,
            textTransform: "capitalize",
            flexShrink: 0,
            height: "28px",
          }}
        />
      </Box>

      {/* DESCRIPTION - Controlled spacing with line clamp */}
      <Typography
        sx={{
          color: "#d4d4d4",
          fontSize: "0.95rem",
          lineHeight: 1.5,
          mb: 1.5, // Consistent spacing
          display: "-webkit-box",
          WebkitLineClamp: 3, // Limits to 3 lines
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {task.description || "No description"}
      </Typography>

      {/* DATE - Reduced spacing */}
      <Typography
        sx={{
          fontSize: "0.85rem",
          color: "#999",
          mb: 2, // Reduced spacing before buttons
        }}
      >
        Created: {task.createdAt}
      </Typography>

      {/* ACTION BUTTONS - Uses mt: auto to push to bottom */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ 
          mt: "auto", // Pushes buttons to bottom
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {task.status !== "deleted" && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => onEdit(task.id)}
            sx={{
              borderColor: "#a78bfa",
              color: "#a78bfa",
              textTransform: "none",
              "&:hover": { 
                borderColor: "#c4b5fd", 
                color: "#c4b5fd",
                background: "rgba(167, 139, 250, 0.1)",
              },
            }}
          >
            Edit
          </Button>
        )}

        {task.status === "in-progress" && (
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#4ade80",
              color: "#4ade80",
              textTransform: "none",
              "&:hover": { 
                borderColor: "#22c55e", 
                color: "#22c55e",
                background: "rgba(74, 222, 128, 0.1)",
              },
            }}
            onClick={() => onComplete(task.id)}
          >
            Complete
          </Button>
        )}

        {task.status !== "deleted" && (
          <Button
            variant="outlined"
            size="small"
            sx={{ 
              borderColor: "#ef4444", 
              color: "#ef4444",
              textTransform: "none",
              "&:hover": {
                borderColor: "#dc2626",
                color: "#dc2626",
                background: "rgba(239, 68, 68, 0.1)",
              },
            }}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        )}

        {task.status === "deleted" && (
          <Button
            variant="outlined"
            size="small"
            sx={{ 
              borderColor: "#9ca3af", 
              color: "#9ca3af",
              textTransform: "none",
              "&:hover": {
                borderColor: "#d1d5db",
                color: "#d1d5db",
                background: "rgba(156, 163, 175, 0.1)",
              },
            }}
            onClick={() => onRestore(task.id)}
          >
            Restore
          </Button>
        )}
      </Stack>
    </Box>
  );
}