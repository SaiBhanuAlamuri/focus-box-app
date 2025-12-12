import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskGrid({
  tasks = [],
  onEdit,
  onComplete,
  onDelete,
  onRestore,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        mt: 4,
        px: { xs: 2, sm: 3, md: 0 },
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
            <Box sx={{ width: "100%", maxWidth: 320 }}>
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

      {(!tasks || tasks.length === 0) && (
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            textAlign: "center",
            mt: 6,
            fontSize: { xs: "1.05rem", sm: "1.15rem" },
          }}
        >
          No tasks found — add a new task!
        </Typography>
      )}
    </Box>
  );
}
