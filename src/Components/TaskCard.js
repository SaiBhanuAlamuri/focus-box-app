

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
        width: "100%",
        maxWidth: 350,             
        minHeight: 230,             
        p: 2,
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
          boxShadow: "0 12px 40px rgba(167,139,250,0.3)",
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
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          mb: 1,
          flexWrap: "wrap",    
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "white",
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
            height: 26,
          }}
        />
      </Box>

     
      <Typography
        sx={{
          color: "#d4d4d4",
          fontSize: "0.95rem",
          lineHeight: 1.5,
          mb: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
       {task.description || "No description"}
      </Typography>

   
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "#aaa",
          mb: 2,
        }}
      >
        Created: {task.createdAt}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: "auto",
          flexWrap: "wrap",   
          gap: 1,
        }}
      >
        {task.status !== "deleted" && (
          <Button size="small" variant="outlined"
            sx={{
              borderColor: "#a78bfa",
              color: "#a78bfa",
              textTransform: "none",
              "&:hover": { background: "rgba(167,139,250,0.1)" },
            }}
            onClick={() => onEdit(task.id)}
          >
            Edit
          </Button>
        )}

        {task.status === "in-progress" && (
          <Button size="small" variant="outlined"
            sx={{
              borderColor: "#4ade80",
              color: "#4ade80",
              textTransform: "none",
              "&:hover": { background: "rgba(74,222,128,0.1)" },
            }}
            onClick={() => onComplete(task.id)}
          >
            Complete
          </Button>
        )}

        {task.status !== "deleted" && (
          <Button size="small" variant="outlined"
            sx={{
              borderColor: "#ef4444",
              color: "#ef4444",
              textTransform: "none",
              "&:hover": { background: "rgba(239,68,68,0.1)" },
            }}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        )}

        {task.status === "deleted" && (
          <Button size="small" variant="outlined"
            sx={{
              borderColor: "#9ca3af",
              color: "#9ca3af",
              textTransform: "none",
              "&:hover": { background: "rgba(156,163,175,0.1)" },
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
