import { Modal, Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export default function EditTaskModal({ open, task, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const saveHandler = () => {
    onSave({ ...task, title, description });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          background: "rgba(37,37,49,0.95)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
          p: 3,
          outline: "none",
          position: "relative",
        }}
      >

       
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            borderRadius: "20px 20px 0 0",
            // background: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography sx={{ fontSize: "1.5rem", color: "white", fontWeight: 700 }}>
            Edit Task
          </Typography>

          <Button
            onClick={onClose}
            sx={{
              color: "white",
              fontSize: "1.5rem",
              minWidth: "auto",
              "&:hover": { opacity: 0.7 },
            }}
          >
            ×
          </Button>
        </Box>

    
        <Stack spacing={2}>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Task Title"
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.1)",
                color: "white",
              },
            }}
          />

          <TextField
            fullWidth
            multiline
            minRows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Task Description"
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "rgba(255,255,255,0.1)",
                color: "white",
              },
            }}
          />
        </Stack>

     {/* Actions */}
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: "#a78bfa",
              color: "#a78bfa",
              fontWeight: 600,
            }}
          >
            Cancel
          </Button>

          <Button
            fullWidth
            variant="contained"
            onClick={saveHandler}
            sx={{
              background: "linear-gradient(135deg, #c4b5fd, #a78bfa)",
              color: "black",
              fontWeight: 700,
            }}
          >
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
