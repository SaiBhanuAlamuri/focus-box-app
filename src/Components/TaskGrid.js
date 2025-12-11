import { Box, Grid, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskGrid({
  tasks = [],
  onEdit,
  onComplete,
  onDelete,
  onRestore,
}) {
  return (
    <Box
      sx={{
        width: "75%",
        px: { xs: 2, sm: 4, md: 10, lg: 15 },
        mt: 4,
        mx: "auto",
       
      }}
    >
      <Grid container spacing={3} justifyContent={'center'}>
        {tasks.map((task) => (
          <Grid
            key={task.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <TaskCard
              task={task}
              onEdit={onEdit}
              onComplete={onComplete}
              onDelete={onDelete}
              onRestore={onRestore}
            />
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
