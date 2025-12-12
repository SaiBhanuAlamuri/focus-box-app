
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme as useMUITheme } from "@mui/material/styles";
import { useCustomTheme } from "../Theme/themeConfig"; 
import TaskManagerHeader from "../components/TaskHeader";
import TaskGrid from "../components/TaskGrid";
import TaskBar from "../components/TaskBar";
import Filters from "../components/Filter";
import EditTaskModal from "../components/Taskmodel";

const STORAGE_KEY = "taskManagerTasks";

export default function TaskManager() {

  const muiTheme = useMUITheme();

  const { mode } = useCustomTheme();
  const isDark = mode === "dark";


  const background = muiTheme.palette.background.default;
  const surface = muiTheme.palette.background.paper;

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  });

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  }, [tasks]);

  const filteredTasks = tasks.filter((t) => {
    const matchesFilter = filter === "all" || t.status === filter;
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: "in-progress",
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setEditingTask(taskToEdit);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedTask) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditModalOpen(false);
  };

  const handleCompleteTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status: "completed" } : task)));
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status: "deleted" } : task)));
  };

  const handleRestoreTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status: "in-progress" } : task)));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        bgcolor: background,
        color: muiTheme.palette.text.primary,
        transition: "background 0.3s ease, color 0.2s ease",
      }}
    >
      <TaskManagerHeader />
      <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 2, md: 4 } }}>
        <TaskBar onAddTask={handleAddTask} />
        <Filters activeFilter={filter} onFilterChange={setFilter} searchValue={search} onSearchChange={setSearch} />
        <TaskGrid
          tasks={filteredTasks}
          onEdit={handleEditTask}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
          onRestore={handleRestoreTask}
        />
      </Box>

      <EditTaskModal open={editModalOpen} task={editingTask} onClose={() => setEditModalOpen(false)} onSave={handleSaveEdit} />
    </Box>
  );
}
