import { Box, Grid, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskGrid({
  tasks = {tasks},
  onEdit,
  onComplete,
  onDelete,
  onRestore,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        mx: "auto",
        mt: 4,
        px: 2, 
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
      >
        {tasks.map((task) => (
          <Grid
            key={task.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 300 }}>
              <TaskCard
                task={task}
                onEdit={onEdit}
                onComplete={onComplete}
                onDelete={onDelete}
                onRestore={onRestore}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {tasks.length === 0 && (
        <Typography
          sx={{
            color: "#d2d2d2",
            textAlign: "center",
            mt: 6,
            fontSize: "1.2rem",
          }}
        >
          No tasks found — add a new task!
        </Typography>
      )}
    </Box>
  );
}
