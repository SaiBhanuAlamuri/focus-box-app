import React from "react";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TaskManagerHeader from "../Components/TaskHeader";

import TaskGrid from "../Components/TaskGrid";

//Bar
import TaskBar from "../Components/TaskBar";

//filters
import Filters from "../Components/Filter";

//modal

import EditTaskModal from "../Components/TaskModal";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  //For Filters
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");



  //Filtering the tasks based on filter and search
  const filteredTasks = tasks.filter((t) => {
    const matchesFilter = filter === "all" || t.status === filter;
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  //This One for taking title and description from TaskBar.js
  const handleAddTask = (title, description) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: "in-progress",
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setEditingTask(taskToEdit);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setEditModalOpen(false);
  };

  


const handleCompleteTask = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    )
  );
};

const handleDeleteTask = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: "deleted" } : task
    )
  );
};


const handleRestoreTask = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: "in-progress" } : task
    )
  );
};


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100",
        minHeight: "100vh",
        height: "auto",
        background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)",
      }}
    >
      <TaskManagerHeader />


      <TaskBar onAddTask={handleAddTask} />



      <Filters
        activeFilter={filter}
        onFilterChange={setFilter}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <TaskGrid
        tasks={filteredTasks}
        onEdit={handleEditTask}
        onComplete={handleCompleteTask}
        onDelete={handleDeleteTask}
        onRestore={handleRestoreTask}
      />

      <EditTaskModal
        open={editModalOpen}
        task={editingTask}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
      />
    </Box>
  );
}
